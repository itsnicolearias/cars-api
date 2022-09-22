'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreignKey: 'id',
        target_Key: 'userId'
      })
      Order.belongsTo(models.Car, {
        foreignKey: 'id',
        target_Key: 'carId'
      })
    }
  }
  Order.init({
    cuantity: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
    timestamps: true,
    paranoid: true
  });
  return Order;
};