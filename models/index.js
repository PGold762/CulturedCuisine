const User = require('./User');
const Recipe = require('./Recipe');
const Culture = require('./Culture');

User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id'
});
User.hasMany(Culture, {
  foreignKey: "user_id"
})
Recipe.hasMany(Culture, {
  foreignKey:'recipe_id'
})

module.exports = { User, Recipe, Culture };
