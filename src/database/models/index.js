'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { envConfig } = require('../../config/envConfig');
const basename = path.basename(__filename);
//const { envConfig } = require(__dirname + '/../../config/envConfig');
const db = {};

const sequelize = new Sequelize(envConfig.db.name, envConfig.db.name, envConfig.db.password, envConfig.db.dialect);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;