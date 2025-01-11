const jwt = require('jsonwebtoken');

function restrictToLoggedinUserOnly(req, res, next) {
  const token = req.cookies.uid;
  
  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    jwt.verify(token, 'Sarthak$123@$');
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

module.exports = restrictToLoggedinUserOnly;
