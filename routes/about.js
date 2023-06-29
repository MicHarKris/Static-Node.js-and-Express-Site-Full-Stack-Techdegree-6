const express = require('express');
const router = express.Router();

// Route handler for the about route
router.get('/', (req, res) => {
    res.render('about');
});

// 404 Error handler
router.use((req, res) => {
    res.status(404).render('page-not-found', { errorMessage: 'Page Not Found', status: 404 });
});

// Exports routes for external use
module.exports = router;