var express = require('express');
const productaddController = require('../controllers/product-add');
var router = express.Router();

/* GET home page. */
router.get('/', productaddController.productadd)
  

module.exports = router;