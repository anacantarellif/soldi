const express = require('express');
const router = express.Router();
const{storeUser, storeID, getDados, getDadosUser, getRanking} = require('../controller/userController')

// router.get('/pontos/:id', getPontos)

module.exports = router;

/** 
@swagger
*     /user/create:
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
router.post('/user/create', storeUser);

/** 
@swagger
*     /user/:id:
*     put:
*         summary: Atualiza os pontos de acordo com a avanço do usuário
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
router.put('/user/:id', storeID);

/** 
@swagger
*     /user/dados:
*     get:
*         summary: Pega as informações de nível e pontos do usuário
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
router.post('/user/dados/', getDados);

/** 
@swagger
*     /user/dadosUser:
*     get:
*         summary: Pega as informações do usuário
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
router.get('/user/dadosUser/:id', getDadosUser);

/** 
@swagger
*     /user/ranking:
*     get:
*         summary: Pega o nível do usuário no ranking
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
router.get('/user/ranking/', getRanking);


module.exports = router;