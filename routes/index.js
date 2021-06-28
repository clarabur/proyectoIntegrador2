var express = require('express');
const indexController = require('../controllers');
var router = express.Router();
let multer = require('multer')
let path = require ('path')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

/* GET home page. */
router.get('/', indexController.index); 
router.get('/detalle/:id', indexController.show);
router.get('/search-results', indexController.search);
router.post('/detalle/:id', indexController.destroy);
router.get('/add', indexController.add);
router.post('/add', upload.single('avatar'), indexController.storeProduct);
router.get('/borrar/:id', indexController.borrar);
router.get('/edit/:id', indexController.edit) //muestra el formulario de creacion
router.post('/edit/:id', upload.single('image'),indexController.update) //procesa la info
router.post ('/comment', indexController.addComentario);

module.exports = router;
