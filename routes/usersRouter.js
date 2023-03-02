const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const validationsRegister = require('../middlewares/validationsRegister');
const validationsUserEdit = require('../middlewares/validationsUserEdit');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const authUserSessionMiddleware = require('../middlewares/authUserSessionMiddleware');

const usersController = require('../controllers/usersController');

router.get('/register', guestMiddleware, usersController.register);
router.post('/register', upload.single('image'), [validationsRegister], usersController.processRegister);

router.get('/login', guestMiddleware, usersController.login);
router.post('/login', usersController.processLogin);

router.get('/profile', authMiddleware, usersController.profile);

router.get('/edit/:id/', authUserSessionMiddleware, usersController.edit)
router.put('/edit/:id/', upload.single('image'), [validationsUserEdit], usersController.processEdit)

router.get('/logout', usersController.logout);

module.exports = router;