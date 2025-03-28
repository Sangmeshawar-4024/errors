const express = require('express');

const app = express();
const port = 3000;

// Mock function to simulate fetching user data
const getUser = async (id) => {
    const users = [
        { id: "1", name: "Kedar Nila", email: "kedar@example.com" },
        { id: "2", name: "Omkar Nila", email: "omkar@example.com" }
    ];
    return users.find(user => user.id === id) || null;
};

// Middleware to handle async errors properly
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

app.get('/users/:id', asyncHandler(async (req, res) => {
    const user = await getUser(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
}));

// Global error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
