const express = require("express");

const {
  getAllUsers,
  createUser,
  editUser,
  deleteUser,
} = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.get("/", getAllUsers);
userRoute.post("/", createUser),
  userRoute.patch("/:id", editUser),
  userRoute.delete("/:id", deleteUser),
  (module.exports = { userRoute });
