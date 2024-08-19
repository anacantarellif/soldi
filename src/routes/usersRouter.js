const express = require('express');
const router = express.Router();
const{storeUser, storeID} = require('../controller/userController')

router.post('/user/create', storeUser);
router.put('/user/:id', storeID);
// router.get('/pontos/:id', getPontos)

module.exports = router;