var express = require('express');

const idController = require('../controllers/idController');
var router = express.Router();

router.get("/", idController.porId)

module.exports = router;