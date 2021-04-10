var express = require('express');
const profileController = require('../controllers/profile');
const profileeditController = require('../controllers/profile-edit');
var router = express.Router();

/* GET home page. */


router.get('/', profileeditController.profileedit)

module.exports = router;