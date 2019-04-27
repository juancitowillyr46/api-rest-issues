'use strict';
const express = require('express');
const issueRoutes = require('./issue.route');
const loginRoutes = require('./login.route');
const userRoutes = require('./user.route');

const router = express.Router();

router.use('/issue/', issueRoutes);

router.use('/user/', userRoutes);

router.use('/login/', loginRoutes);

module.exports = router;