const express = require('express');
const router = express.Router();
const { login } = require('../controller/loginController');

// Define a rota de login
router.post('/login', login);

module.exports = router;
