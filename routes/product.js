var express = require('express');
const productController = require('../controllers/product');
var router = express.Router();

/* GET home page. */
router.get('/:id', productController.product)

router.get('/', productController.productadd)

router.get("/", productController.porId)

router.get('/', productController.search )
  

module.exports = router;