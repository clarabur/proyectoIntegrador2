var express = require('express');
const profileController = require('../controllers/profile');
const profileeditController = require('../controllers/profile-edit');
var router = express.Router();

/* GET home page. */


router.get('/:id', profileeditController.edit)
router.post('/', profileeditController.profileEdit)

module.exports = router;