const express = require('express');
const router = express.Router();

const projects = require('../data.json').projects;

// Route handler for the index route
router.get('/', (req, res) => {
    res.render('index', { projects });
});

// Exports routes for external use
module.exports = router;