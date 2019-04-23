'use strict';
const express = require('express');
const controller = require('../controllers/issue.controller');
const router = express.Router();

router.post('/', controller.post);
router.get('/', controller.read);
router.get('/:id', controller.getId);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;