const express = require('express');
const router = express.Router();
const validateAuthorInput = require('../middleware/validationMiddleware');

// Register route with validation middleware
router.post('/register', validateAuthorInput, (req, res) => {
    // Route logic for registering new authors
    res.send('Register endpoint');
});

module.exports = router;
