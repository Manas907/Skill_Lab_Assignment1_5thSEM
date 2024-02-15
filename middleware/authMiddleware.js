const isAuthenticated = (req, res, next) => {
    // Example: Check if the user is authenticated
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = isAuthenticated;
