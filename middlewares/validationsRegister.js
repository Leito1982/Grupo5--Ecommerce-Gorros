const { body } = require('express-validator');
const path = require('path')

const validationsRegister = [
  body('firstName').notEmpty().withMessage('El campo "nombre" es obligatorio')
    .isLength({min: 2}).withMessage('El campo "nombre" debe tener como minimo 2 caracteres'),

  body('lastName').notEmpty().withMessage('El campo "apellido" es obligatorio')
    .isLength({min: 2}).withMessage('El campo "apellido" debe tener como minimo 2 caracteres'),

  body('email').notEmpty().withMessage('El campo "email" es obligatorio')
    .isEmail().withMessage('El email no es válido'),

  body('password').notEmpty().withMessage('El campo "password" es obligatorio')
    .isLength({ min: 8}).withMessage('El password debe tener como mínimo 8 caracteres'),
  
  body('image').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg', '.webp'];
    
    if (file) {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
      }
    
    }
    return true;
  })
]

  module.exports =validationsRegister;

