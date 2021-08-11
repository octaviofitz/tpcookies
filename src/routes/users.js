var express = require('express');
var router = express.Router();

const {register,save}= require('../controllers/usersController')
const registerValidator= require('../validations/registerValidation')
/* GET users listing. */
router.get('/register',register)
router.post('/register', registerValidator, save)
;

module.exports = router;
