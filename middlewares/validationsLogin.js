const { body } = require('express-validator');

const validationsLogin = [

    body('email').notEmpty().withMessage('El campo email es obligatorio')
        .isEmail().withMessage('El email no es válido'),
    body('password').notEmpty().withMessage('El campo password es obligatorio'),

    ]
  
    module.exports = validationsLogin;