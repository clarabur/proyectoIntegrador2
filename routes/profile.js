var express = require('express');
const profileController = require('../controllers/profile');
var router = express.Router();
let multer = require('multer')
let path = require ('path')
var storage = multer.diskStorage({ // almacenar archivos en carpetas mediante el método
  // 2 parametros:
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) 
    } //EXTRNAME: Ppara poner la extensión correcta en el nombre del archivo.
    //obtener la extencion del archivo orginal para usarlo en el nuevo nombre del archivo.
  })
   
  var upload = multer({ storage: storage })
/* GET home page. */
router.get('/detalle/:id', profileController.profile);
router.get('/editarPerfil/:id', profileController.editarPerfil)
router.post('/editarPerfil/:id', upload.single('avatar'), profileController.editar)


module.exports = router;