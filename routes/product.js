var express = require('express');
const productController = require('../controllers/product');
var router = express.Router();

/* GET home page. */
router.get('/:id', productController.product)



module.exports = router;
