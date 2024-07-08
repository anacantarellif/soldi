const express = require('express');
const router = express.Router();
const{storeUser} = require('../controller/userController')

console.log("AQUI")

router.post('/user/create', storeUser);

module.exports = router;