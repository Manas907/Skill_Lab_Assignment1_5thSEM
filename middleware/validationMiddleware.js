const validateAuthorInput = (req, res, next) => {
    // Example: Validate author input (e.g., username, password)
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    // If validation passes, proceed to the next middleware or route handler
    next();
};

module.exports = validateAuthorInput;
