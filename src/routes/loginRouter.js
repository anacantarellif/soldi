const express = require('express');
const router = express.Router();
const { login } = require('../controller/loginController');

// Define a rota de login


module.exports = router;


/** 
* @swagger
*     /login:
*     post:
*         summary: Cadastra um usuário
*     responses:
*     200:
*         description: Sucesso
*         content:
*             application/json:
*                schema:
*                 type: array
*                 items:
*                  type: object
*/
router.post('/login', login);