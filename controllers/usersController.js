const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const Users = require('../models/Users');

const controller = {
    register: (req, res) => {
        res.render('users/register');
   },
   processRegister: (req, res) => {

    //Validaciones
    const errors = validationResult(req);
        
    if(errors.errors.length > 0){

        res.render('./users/register', { errors: errors.mapped(), oldData: req.body});
    }else{
        //Reviso que no este registrado usuario con ese mail    
        let userInDB = Users.findByField('email', req.body.email);
        if(userInDB){
            return res.render('./users/register', { errors: { email: { msg: 'Este email ya está registrado'}}, oldData: req.body});
        }
        //Defino img, la que suben o por defecto
        let img

        if(req.file != undefined){
            img = req.file.filename
        } else {
            img = 'userImage-default.png'
        }       
        //creo usuario para sobreescribir el json
        let userToCreate = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            category: "Customer",
            image: img
        } 
        //Ejecuto el método create del modelo
        let userCreated = Users.create(userToCreate)
        //Redirecciono al login
        res.redirect('/users/login')
    }
},   

    login: (req, res) => {
    res.render('users/login');
    },

    processLogin: (req, res) => {
        let userToLogin = Users.findByField('email', req.body.email);

        if(userToLogin){

            if ( bcrypt.compareSync(req.body.password, userToLogin.password)){
                
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.rememberUser){
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 });
                }
                return res.redirect('/')
            }
            return res.render('./users/login', {errors: {email: {msg: 'Las credenciales son inválidas'}}, oldData: req.body})
        }
            return res.render('./users/login', {errors: {email: {msg: 'El email no es correcto'}}})
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    }
    
}

module.exports = controller;