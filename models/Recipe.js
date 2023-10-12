const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    servings: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    readInMinutes: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    sourceURL: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    summary: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    cuisines: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    combinedIngredients: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    cultureFood: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cultureTradition: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
  }
);

module.exports = Recipe;
