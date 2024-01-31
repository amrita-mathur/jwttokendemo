const express = require('express');
const {secretKey, jwt, verifyToken} = require('./jwtoperations');

const app = express();
const port = 3000;

// Login route - Generates a JWT upon successful login
app.post('/login', (_, res) => {
  // In a real-world scenario, you would authenticate the user (e.g., check credentials against a database)
  const user = {
    id: 1,
    username: 'john_doe',
    role: 'user'
  };

  // Create a token with user information
  const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

  res.json({ token });
});

// Protected route - Requires a valid JWT for access
app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
