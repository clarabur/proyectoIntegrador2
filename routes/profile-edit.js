var express = require('express');
const profileController = require('../controllers/profile');
const profileeditController = require('../controllers/profile-edit');
var router = express.Router();

/* GET home page. */
let multer = require('multer')
let path = require ('path')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })

router.get('/:id', profileeditController.edit)
router.post ('/', upload.single('avatar'),profileeditController.profileEdit)


module.exports = router;