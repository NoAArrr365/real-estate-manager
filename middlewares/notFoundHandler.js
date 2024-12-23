const notFoundHandler = (req, res, next) => {
  const error = new Error("Page non trouvée")
  error.statusCode = 404
  next(error)
}

module.exports = notFoundHandler;
