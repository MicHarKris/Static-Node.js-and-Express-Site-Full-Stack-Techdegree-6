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
            pageTitle: 'Project Not Found',
            errorMessage: 'The requested project was not found.'
        });
        return;
    }

    res.render('project', { project });
});

// Exports routes for external use
module.exports = router;