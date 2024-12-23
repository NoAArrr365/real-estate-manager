const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Property extends Model {
    static associate(models) {
      Property.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  Property.init({
    address: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    userId: DataTypes.INTEGER, // Clé étrangère correcte
  }, {
    sequelize,
    modelName: 'Property',
  });

  return Property;
};
