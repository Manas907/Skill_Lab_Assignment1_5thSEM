const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middleware/authenticationMiddleware');

// Create new blog endpoint with authentication middleware
router.post('/create', isAuthenticated, (req, res) => {
    // Route logic for creating new blogs
    res.send('Create blog endpoint');
});

// Get specific blog by author ID
router.get('/:authorId', (req, res) => {
    const authorId = req.params.authorId;
    // Route logic for fetching specific blog by author ID
    res.send(`Get blog by author ID: ${authorId}`);
});

module.exports = router;
