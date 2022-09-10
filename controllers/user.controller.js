const { User } = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const user = await User.findAll();

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await User.create({ name, email, password });

    // 201 -> Success and a resource has been created
    res.status(201).json({
      status: "success",
      data: { newUser },
    });
  } catch (error) {
    console.log(error);
  }
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not exist",
      });
    }

    await user.update({ name, email }, { where: { id } });

    res.status(204).json({
      status: "succes",
      data: { user },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(202).json({
        status: "error",
        message: "User not exist",
      });
    }
    await user.update({ status: "inactive" }, { where: { id } });

    res.status(200).json({
      status: "success",
      message: "User incactive",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  editUser,
  deleteUser,
};
