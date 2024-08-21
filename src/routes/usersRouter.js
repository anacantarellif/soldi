const express = require('express');
const router = express.Router();
const{storeUser, storeID, getDados} = require('../controller/userController')

router.post('/user/create', storeUser);
router.put('/user/:id', storeID);
router.post('/user/dados', getDados);
// router.get('/pontos/:id', getPontos)

module.exports = router;