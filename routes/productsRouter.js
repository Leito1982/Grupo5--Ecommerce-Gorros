const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer')

const productsController = require('../controllers/productsController');
  

router.get('/', productsController.index);  
 
router.get('/create', productsController.create); 
router.post('/create', upload.single('image'), productsController.store); 

router.get('/detail/:id/', productsController.detail); 
 
router.get('/edit/:id/', productsController.edit); 
router.put('/edit/:id/', upload.single('image'), productsController.update); 

router.delete('/delete/:id', productsController.destroy); 

router.get('/cart', productsController.cart)

module.exports = router;