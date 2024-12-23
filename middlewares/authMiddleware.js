const jwt = require('jsonwebtoken');

const authToken = (req, res, next) => {
  const auth = req.headers['authorization']
  const token = auth && auth.split(" ")[1]
  if (!token) return res.status(401).json({message: "Accès non autorisé"})
  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
  if (error) return res.status(403).json({message: "Token Invalide"})
  req.user = user
  next()
  })
}

module.exports = authToken;
