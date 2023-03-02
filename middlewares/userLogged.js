const db = require('../database/models');
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Users = db.User;

function userLogged (req, res, next) {
    
    res.locals.isLogged = false;

    if(req.session.userLogged){

        res.locals.isLogged = req.session.userLogged

            if (req.session.userEdit) {

             res.locals.isLogged = req.session.userEdit;
           
            }
        return next();

    } else if (req.cookies.userEmail) {

        Users.findOne({
            where: {email: req.cookies.userEmail},
            include: [{association: 'level'}]
            })  
            .then(userFromCookie => {
                
                delete userFromCookie.password;
                req.session.userLogged = userFromCookie;
                res.locals.isLogged = userFromCookie

                return next();
                                        
            }) 
    } else {

        return next();
    }

}

module.exports = userLogged;