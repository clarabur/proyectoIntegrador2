var express = require('express');
const indexController = require('../controllers');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.index) 
router.get('/detalle/:id', indexController.show);
router.post ('/', indexController.store)
router.get('/search', indexController.search)

module.exports = router;
