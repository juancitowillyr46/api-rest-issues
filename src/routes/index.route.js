const express = require('express');
const issueRoutes = require('./issue.route');
const router = express.Router();

router.use('/issue/', issueRoutes);

module.exports = router;