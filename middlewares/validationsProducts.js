const { body } = require('express-validator');

const validationsProducts = [

  body('name').notEmpty().withMessage('El campo "nombre de producto" es obligatorio')
    .isLength({ min: 5 }).withMessage('El campo "nombre de producto" debe tener al menos 5 caracteres'),

  body('description').isLength({ min: 20 }).withMessage('El campo "descripcion" debe tener al menos 20 caracteres'),
  
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

  module.exports =validationsProducts;