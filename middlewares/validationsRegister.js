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
  

// Aca tenemos que copiar la parte de codigo de "pruebas" para validar las extensiones de las imagenes
// Cuando se corto la clase no lo termine de armar. 27/3



  ]

  module.exports =validationsRegister;





  // -------------------------------- Pruebas ----

  // body('image1').custom((value, { req }) => {
	// 	let file = req.files[0];
	// 	let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg', '.webp'];

	// 	if (!file) {
	// 		throw new Error('Tienes que subir una imagen');
	// 	} else {
	// 		let fileExtension = path.extname(file.originalname);
	// 		if (!acceptedExtensions.includes(fileExtension)) {
	// 			throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
	// 		}
	// 	}



  // app.use(expressValidator({
  //   customValidators: {
  //       isImage: function(value, filename) {
    
  //           var extension = (path.extname(filename)).toLowerCase();
  //           switch (extension) {
  //               case '.jpg':
  //                   return '.jpg';
  //               case '.jpeg':
  //                   return '.jpeg';
  //               case  '.png':
  //                   return '.png';
  //               default:
  //                   return false;
  //           }
  //       }
  //   }}));





  //             // Array of allowed files
// const array_of_allowed_files = ['png', 'jpeg', 'jpg', 'gif'];

// // Get the extension of the uploaded file
// const file_extension = image.originalname.slice(
//     ((image.originalname.lastIndexOf('.') - 1) >>> 0) + 2
// );

// // Check if the uploaded file is allowed
// if (!array_of_allowed_files.includes(file_extension)) {
//   throw Error('Invalid file');