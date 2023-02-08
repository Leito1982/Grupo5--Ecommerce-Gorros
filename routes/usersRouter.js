const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const validations = require('../middlewares/validationsRegister');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const usersController = require('../controllers/usersController');

router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.single('image'), [validations], usersController.processRegister);

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.processLogin);

router.get('/profile', authMiddleware, usersController.profile);

router.get('/logout', usersController.logout);

module.exports = router;