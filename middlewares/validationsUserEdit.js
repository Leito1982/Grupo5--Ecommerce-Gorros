const { body } = require('express-validator');

const validationsUserEdit = [
  body('firstName').notEmpty().withMessage('El campo nombre es obligatorio'),
  body('email').isEmail().withMessage('El email no es válido'),
  ]

  module.exports =validationsUserEdit;