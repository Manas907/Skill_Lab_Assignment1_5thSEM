const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests

// Routes
const authorRoutes = require('./routes/authorRoutes');
const blogRoutes = require('./routes/blogRoutes');

// Apply routes
app.use('/author', authorRoutes);
app.use('/blog', blogRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
