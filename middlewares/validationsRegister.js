const { body } = require('express-validator');

const validationsRegister = [
  body('firstName').notEmpty()
    .isLength({min: 2})
      .withMessage('El campo nombre es obligatorio y debe tener como minimo 2 caracteres'),
  body('lastName').notEmpty()
    .isLength({min: 2})
      .withMessage('El campo apellido es obligatorio y debe tener como minimo 2 caracteres'),
  body('email').isEmail().withMessage('El email no es válido'),
  body('password').isLength({ min: 8}).withMessage('El password debe tener como mínimo 8 caracteres'),
  // body('image').isIn([ "JPG", "JPEG", "PNG", "GIF" ]).withMessage("MENSAJE DE FRONT")
  ]

  module.exports =validationsRegister;