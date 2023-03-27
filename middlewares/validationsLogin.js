const { body } = require('express-validator');

const validationsLogin = [

    body('email').isEmail().isEmpty().withMessage('El email no es válido'),
    body('password').isLength({ min: 8}).withMessage('El password es incorrecto'),

    ]
  
    module.exports = validationsLogin;