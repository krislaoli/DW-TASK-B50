'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    author: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    image: DataTypes.STRING,
    nodejs: DataTypes.BOOLEAN,
    js: DataTypes.BOOLEAN,
    react: DataTypes.BOOLEAN,
    vuejs: DataTypes.BOOLEAN,
    postedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};