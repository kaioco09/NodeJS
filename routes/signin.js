const express = require('express');
const router = express.Router();

const SignInController = require('../controllers/SignInController');

router.get('/' , SignInController.signin);

module.exports = router;