// Models
const { Tasks } = require("../models/tasks.model");
const { User } = require("../models/user.model");

const getAllTasks = async (req, res) => {
  try {
    const task = await Tasks.findAll();

    // {
    //     attributes: ["id", "title", "limitDate", "createdAt"],
    //     include: [{ model: User, attributes: ["id", "name"] }],
    //   }

    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getTaskByStatus = async (req, res, next) => {
  try {
    const { status } = req.params;

    const task = await Tasks.findOne({ where: { status } });

    if (!status) {
      return res.status(404).json({
        status: "error",
        message: "Status not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: { task },
    });
  } catch (error) {
    console.log(error);
  }
};

const createTask = async (req, res) => {
  try {
    const { title, userId, limitDate, startDate, finishDate } = req.body;

    const newTask = await Tasks.create({
      title,
      userId,
      startDate,
      limitDate,
      finishDate,
    });

    res.status(201).json({
      status: "success",
      data: { newTask },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { finishDate } = req.body;
    const { id, limitDate } = req.params;

    const task = await Tasks.findOne({ where: { id } });

    await task.update({ finishDate });

    res.status(200).json({
      status: "success",
      data: { task },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    // const { tasks } = req;

    const { id } = req.params;

    const task = await Tasks.findOne({ where: { id } });

    await task.update({ status: "cancelled" });

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTasks,
  getTaskByStatus,
  createTask,
  updateTask,
  deleteTask,
};
