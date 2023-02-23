const Users = require('../models/Users');

function userLogged (req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = Users.findByField('email', emailInCookie);
    // return console.log(userFromCookie);

    if(userFromCookie) {
        req.session.userLogged = userFromCookie;
    }

    if(req.session.userLogged){

    res.locals.isLogged = true;

    res.locals.userLogged = req.session.userLogged;

    }

    next();
}

module.exports = userLogged;