const express = require('express');
const router = express.Router();

// Route handler for the about route
router.get('/', (req, res) => {
    res.render('about');
});

// Exports routes for external use
module.exports = router;