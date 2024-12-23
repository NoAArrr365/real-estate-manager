const { body, validationResult } = require("express-validator")

const validateProperty = [
  body("address").notEmpty().withMessage("Adresse non valide"),
  body("price").isFloat({min: 0}).withMessage("Prix doit être un nombre"),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }
    next()
  }
]

module.exports = validateProperty;
