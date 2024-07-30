const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

// Define a rota de login
router.post('/login', loginController.login);

module.exports = router;
