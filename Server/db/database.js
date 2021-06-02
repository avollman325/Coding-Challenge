const Sequelize = require('sequelize');
const mysql = require('mysql2');
const dotenv = require('dotenv').config();

// const host = process.env.host;
// const database = process.env.database;
// const password = process.env.password;
// const username = process.env.username;

const sequelize = new Sequelize('Cats', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

});

sequelize.authenticate()
  .then(() => console.info('Connected to the Database'))
  .catch((err) => console.warn(err));

  const Cats = sequelize.define('cats', {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    thumbnailUrl: {
      type: Sequelize.STRING(10000)
    },

    name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },

    ownerName: {
      type: Sequelize.STRING(100),
      allowNull: false
    },

    viewCount: {
      type: Sequelize.INTEGER,

    },


  });
  sequelize.sync({ force: true })
  .then(() => {
    console.log('Database & tables created!');
  }).catch((err) => { console.log(err); });
  module.exports = sequelize;