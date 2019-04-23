'use strict';
const express = require('express');
const controller = require('../controllers/login.controller');
const router = express.Router();

router.post('/', controller.login);
router.post('/secure/', controller.secure);

module.exports = router;