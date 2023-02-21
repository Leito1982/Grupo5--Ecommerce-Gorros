const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if(req.headers.referer == 'http://localhost:3000/products/create' || req.headers.referer == 'http://localhost:3000/products/edit/' + req.params.id) {
        return cb(null, 'public/images')
      }
        return cb(null, 'public/images/users')  
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + path.extname(file.originalname))
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload;