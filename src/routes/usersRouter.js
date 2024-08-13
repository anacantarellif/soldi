const express = require('express');
const router = express.Router();
const{storeUser, storeID} = require('../controller/userController')

router.post('/user/create', storeUser);
router.post('/user/updateID', storeID);

module.exports = router;