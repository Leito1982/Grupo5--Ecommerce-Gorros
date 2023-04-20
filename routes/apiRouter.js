const express = require('express');
const router = express.Router();
const usersAPIController = require('../controllers/apiControllers/usersController');
const productsAPIController = require('../controllers/apiControllers/productsController');


//Listado de todos los usuarios
router.get('/users', usersAPIController.list);
//Detalle de un usuario
router.get('/users/:id/', usersAPIController.detail);

//Listado de todos los productos
router.get('/products', productsAPIController.list);
//Detalle de un producto
router.get('/products/:id/', productsAPIController.detail);

module.exports = router;