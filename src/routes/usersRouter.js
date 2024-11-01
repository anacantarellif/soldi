const express = require('express');
const router = express.Router();
const{storeUser, storeConteudo, storeID, getDados, getDadosUser, updateUser, getDataUser, getRanking} = require('../controller/userController')

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
*     /conteudo/create:
*     post:
*         summary: Cadastra um conteúdo extra
*     responses:
*     200:
*         description: Sucesso
*         content:
*             application/json:
*                schema:
*                 type: array
*                 items:
*                  type: objectselect * from usuarios;
*/
router.post('/conteudo/create', storeConteudo);

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
*     /user/dadosUser/:id:
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
*     /user/updateUser/:id:
*     put:
*         summary: Atualiza as informações do usuário
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
router.put('/user/updateUser/:id', updateUser);

/** 
@swagger
*     /user/data/:id:
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
router.get('/user/data/:id', getDataUser);

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