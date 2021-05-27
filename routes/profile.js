var express = require('express');
const profileController = require('../controllers/profile');
var router = express.Router();

/* GET home page. */
router.get('/', profileController.profile)

router.get('/', profileController.profileedit)

router.get('/', profileController.register)

module.exports = router;