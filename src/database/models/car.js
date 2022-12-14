'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.hasMany(models.Order,{
        foreignKey: 'carId',
      })
    }
  }
  Car.init({
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    doors_cuantity: DataTypes.INTEGER,
    motor: DataTypes.STRING,
    max_velocity: DataTypes.STRING,
    color: DataTypes.STRING,
    sliding_roof: DataTypes.BOOLEAN,
    fuel_type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Car',
    timestamps: true,
    paranoid: true
  });
  return Car;
};