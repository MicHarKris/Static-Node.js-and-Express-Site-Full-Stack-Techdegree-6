const express = require('express');
const router = express.Router();

const projects = require('../data.json').projects;

// Route handler for the index route
router.get('/', (req, res) => {
    res.render('index', { projects });
});

// Route handler for the project details route
router.get('/project/:projectId', (req, res) => {
    const projectId = parseInt(req.params.projectId);
    const project = projects.find(proj => proj.id === projectId);
  
    if (!project) {
        // Handle case when projectId is not found
        res.status(404).render('error', {
            errorTitle: 'Project Not Found',
            errorMessage: 'The requested project was not found.',
            status: 404
        });
        return;
    }
  
    res.render('project', { project });
});

// 404 Error handler
router.use((req, res) => {
    res.status(404).render('page-not-found', { errorMessage: 'Page Not Found', status: 404 });
});

// Exports routes for external use
module.exports = router;