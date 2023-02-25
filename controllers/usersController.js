const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
//const Users = require('../models/Users');
const db = require('../database/models');
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Users = db.User;

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
        Users.findOne({
            where: {email: req.body.email}
        })
        .then(userInDB => {
           if(userInDB){
            return res.render('./users/register', { errors: { email: { msg: 'Este email ya está registrado'}}, oldData: req.body});
           }
        });
        //Defino img, la que suben o por defecto
        let img

        if(req.file != undefined){
            img = req.file.filename
        } else {
            img = 'userImage-default.png'
        }       
        //creo usuario para sobreescribir el json
        Users.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            image: img,
            level_id: 2,
        })
        .then(res.redirect('/users/login'))    
    }
},   

    login: (req, res) => {
    res.render('users/login');
    },

    processLogin: (req, res) => {

        Users.findOne({
            where: {email: req.body.email},
            include: [{association: 'level'}]
        })
        .then(userToLogin => {
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
        }) 
    },

    profile: (req, res) => {
        res.render('./users/profile', { user: req.session.userLogged})
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    }
    
}

module.exports = controller;