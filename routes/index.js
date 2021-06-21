var express = require('express');
const indexController = require('../controllers');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.index) 

router.get('/detalle/:id', indexController.show);
router.get('/search', indexController.search)
router.post('/detalle/:id', indexController.destroy);
router.get('/borrar/:id', indexController.borrar)
router.get('/edit/:id', indexController.edit)
router.post('/edit/:id', indexController.update)
module.exports = router;
