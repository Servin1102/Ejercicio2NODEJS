const express = require("express");

const {
  getAllTasks,
  getTaskByStatus,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");

const taskRoute = express.Router();

taskRoute.get("/", getAllTasks),
taskRoute.get("/:status", getTaskByStatus),
taskRoute.post("/", createTask),
taskRoute.patch("/:id", updateTask),
taskRoute.delete("/:id", deleteTask),


(module.exports = { taskRoute });
