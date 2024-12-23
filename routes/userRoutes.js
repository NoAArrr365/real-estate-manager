const express = require('express');
const { createUser, getUser, updateUser, deleteUser } = require('../controllers/userController.js');
const { login } = require("../controllers/authController.js");
const validateUser = require("../middlewares/validateUser.js");
const authToken = require("../middlewares/authMiddleware.js");

const router = express.Router();

// Routes utilisateur
router.get('/users/:id', getUser);                      // GET un utilisateur
router.post('/users', validateUser, createUser);        // POST créer un utilisateur
router.post("/login", login);                           // POST login
router.put('/users/:id', authToken, updateUser);        // PUT modifier un utilisateur
router.delete('/users/:id', authToken, deleteUser);     // DELETE supprimer un utilisateur

module.exports = router;
