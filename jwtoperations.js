const secretKey = '1234567890abcdefghijklmnopqrstuvwxyz';
const jwt = require('jsonwebtoken');

// Function to verify in invalid or empty token is passed
function checkUndefinedToken(token, res){
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }
}
// Middleware to verify JWT
const verifyToken = (req, res, next) => {
    let token = req.headers.authorization;
    
    checkUndefinedToken(token, res);

    // token = token.split(' ')[1];
    console.log(token)
  
    checkUndefinedToken(token, res);
  
    jwt.verify(token, secretKey, (err, decoded) => {
        console.log(err)
        console.log(decoded)
      if (err) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token', error: err });
      }
      req.user = decoded; // Attach the decoded payload to the request object
      next();
    });
  };

module.exports = {
    secretKey,
    jwt,
    verifyToken
}