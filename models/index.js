'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');

var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

console.log(env)
console.log(config)
if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: true
    }
  })
} else {
  var sequelize = new Sequelize('postgres://fxyjrfsfbacgmq:e94d5fb003070e5d576a468569cedb4c0a0b5eba7b10d57d5393eab7c643d032@ec2-23-23-220-163.compute-1.amazonaws.com:5432/dbpjfpp41fret0');
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
