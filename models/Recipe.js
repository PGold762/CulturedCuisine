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
    readyInMinutes: {
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
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    cuisines: {   // Region of the cuisine 
      type: DataTypes.STRING,
      defaultValue: null,
    },
    combinedIngredients: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    cultureFood: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    cultureTradition: {
      type: DataTypes.TEXT,
      defaultValue: null,
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
