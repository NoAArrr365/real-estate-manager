const { User } = require("../models");
const bcrypt = require("bcrypt");

const getUser = async (id) => {
  try {
    const user = await User.findOne({ where: { id } });
    return user;
  } catch (error) {
    throw error;
  }
};

const createUser = async (params) => {
  try {
    const checkUser = await User.findOne({where: {email: params.email}})
    if (checkUser) {
      throw new Error("Cet email est déjà associé à un compte.")
    }
    const hashedPassword = await bcrypt.hash(params.password, 10);
    params.password = hashedPassword;
    const user = await User.create(params);
    return user;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (params) => {
  try {
    const user = await User.findOne({ where: { id: params.id } });
    if (!user) {
      throw new Error("User not found!");
    }
    await user.update(params);
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const user = await User.destroy({ where: { id } });
    if (!user) {
      throw new Error("User not found!");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { getUser, createUser, updateUser, deleteUser };
