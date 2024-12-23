const errorHandler = (err, req, res, next) => {
  // Définir le code d'état (par défaut 500 = Erreur serveur)
  const statusCode = err.statusCode || 500;

  // Structure du message d'erreur
  res.status(statusCode).json({
    success: false,
    message: err.message || "Erreur interne du serveur.",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined, // Affiche la stack en dev uniquement
  });
};

module.exports = errorHandler;
