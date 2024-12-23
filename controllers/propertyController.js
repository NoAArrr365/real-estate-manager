const { User, Property } = require("../models");

const getProperties = async (userId) => {
  try {
    const properties = await Property.findAll({ where: { userId } });
    return properties;
  } catch (error) {
    throw error;
  }
};

const createProperty = async (params, userId) => {
  try {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error("User not found!");
    }
    const newProperty = await Property.create({ ...params, userId });
    return newProperty;
  } catch (error) {
    throw error;
  }
};

const getOneProperty = async (id) => {
  try {
    const property = await Property.findOne({ where: { id } });
    if (!property) {
      throw new Error("This property was not found!");
    }
    return property;
  } catch (error) {
    throw error;
  }
};

const updateProperty = async (params) => {
  try {
    const property = await Property.findOne({ where: { id: params.id } });
    if (!property) {
      throw new Error("This property can not be found!");
    }
    await property.update(params);
    return property;
  } catch (error) {
    throw error;
  }
};

const deleteProperty = async (id) => {
  try {
    const property = await Property.destroy({ where: { id } });
    if (!property) {
      throw new Error("This property can not be found");
    }
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getProperties,
  createProperty,
  getOneProperty,
  updateProperty,
  deleteProperty
};
