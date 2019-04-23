'use strict';
const express = require('express');
const controller = require('../controllers/issue.controller');

const middleware = require('../middleware/middleware');

const router = express.Router();

router.post('/', middleware.checkToken, controller.post);
router.get('/', middleware.checkToken, controller.read);
router.get('/:id', middleware.checkToken, controller.getId);
router.put('/:id', middleware.checkToken, controller.put);
router.delete('/:id', middleware.checkToken, controller.delete);

module.exports = router;