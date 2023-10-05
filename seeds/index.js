const sequelize = require('../config/connection');
const seedAmerican = require('./american');
const seedChinese = require('./chinese');
const seedEE = require('./eastern-european');
const seedIndian = require('./indian');
const seedItalian = require('./italian');
const seedMexican = require('./mexican');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedAmerican();

  await seedChinese();

  await seedEE();

  await seedIndian();

  await seedItalian();

  await seedMexican();

  process.exit(0);
};

seedAll();
