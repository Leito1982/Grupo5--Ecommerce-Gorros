const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer')
const adminMiddleware = require('../middlewares/adminMiddleware');

const productsController = require('../controllers/productsController');
  

router.get('/', productsController.index);  
 
router.get('/create', adminMiddleware, productsController.create); 
router.post('/create', upload.single('image'), productsController.store); 

router.get('/detail/:id/', productsController.detail); 
 
router.get('/edit/:id/', adminMiddleware, productsController.edit); 
router.put('/edit/:id/', upload.single('image'), productsController.update);

router.post('/search', productsController.search);

router.get('/delete/:id/', productsController.confirmDelete)
router.delete('/delete/:id/', adminMiddleware, productsController.destroy); 

router.get('/cart', productsController.cart)

module.exports = router;