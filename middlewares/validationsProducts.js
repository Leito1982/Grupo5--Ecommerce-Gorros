const { body } = require('express-validator');

const validationsProducts = [

  body('name').notEmpty().isLength({ min: 5 }).withMessage('El campo "nombre de producto" debe tener al menos 5 caracteres'),
  body('description').isLength({ min: 20 }).withMessage('El campo "descripcion" debe tener al menos 20 caracteres'),

  ]

  module.exports =validationsProducts;