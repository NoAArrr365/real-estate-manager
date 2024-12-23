const { body, validationResult} = require("express-validator")

const validateUser = [
  body("email").isEmail().withMessage("Email invalide"),
  body("password").isLength({min: 8}).withMessage("Le mot de passe doit contenir 8 caractères minimum"),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }
    next()
  }
]

module.exports = validateUser;
