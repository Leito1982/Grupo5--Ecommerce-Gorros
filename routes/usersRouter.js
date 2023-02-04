const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const validations = require('../middlewares/validationsRegister');

const usersController = require('../controllers/usersController');

router.get('/register', usersController.register);
router.post('/register', upload.single('image'), [validations], usersController.processRegister);

router.get('/login', usersController.login);

module.exports = router;