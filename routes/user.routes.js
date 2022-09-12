const express = require("express");

const {
  getAllUsers,
  createUser,
  editUser,
  deleteUser,
} = require("../controllers/user.controller");

// Middlewares
const { userExists } = require("../midellwares/user.validator");
const {
  createUserValidators,
} = require("../midellwares/validator.middlewares");

const userRoute = express.Router();

userRoute.get("/", getAllUsers);
userRoute.post("/", createUserValidators, createUser),
  userRoute.patch("/:id", userExists, editUser),
  userRoute.delete("/:id", userExists, deleteUser),
  (module.exports = { userRoute });
