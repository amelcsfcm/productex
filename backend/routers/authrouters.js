const { Router } = require("express");
const { login, register } = require("../controllers/authController");
const Authrouter = Router();

Authrouter.post("/auth/login", login);
Authrouter.post("/auth/register", register);

module.exports = Authrouter;
