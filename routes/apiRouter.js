const express = require('express');
const router = express.Router();
const usersAPIController = require('../controllers/apiControllers/usersController');


//Listado de todos los usuarios
router.get('/users', usersAPIController.list);
//Detalle de un usuario
router.get('/users/:id/', usersAPIController.detail);


module.exports = router;