var express = require('express');
const searchController = require('../controllers/search-results');
var router = express.Router();

/* GET home page. */
router.get('/',searchController.search )

module.exports = router;