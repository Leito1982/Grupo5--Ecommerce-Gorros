const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const productsController = require('../controllers/productsController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })
  

router.get('/', productsController.index);  
 
router.get('/create', productsController.create); 
router.post('/create', upload.single('image'), productsController.store); 

router.get('/detail/:id/', productsController.detail); 
 
router.get('/edit/:id/', productsController.edit); 
router.put('/edit/:id/', upload.single('image'), productsController.update); 

router.delete('/delete/:id', productsController.destroy); 

router.get('/cart', productsController.cart)

module.exports = router;