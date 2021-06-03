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

  const Catdetails = sequelize.define('catdetails', {

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

    birthdate: {
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

  // sequelize.sync({ force: true })
  // .then(() => {
  //   Catdetails.create({

  //     thumbnailUrl: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
  //     name: 'Wallace',
  //     birthdate: '2016-04-09',
  //     ownerName: 'John Doe',
  //     viewCount: 0
  //   }).catch((err) => { console.log(err); });
  //   Catdetails.create({

  //   thumbnailUrl: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg',
  //   name: 'Chunk',
  //   birthdate: '2017-08-19',
  //   ownerName: 'Jane Doe',
  //   viewCount: 0
  //   }).catch((err) => { console.log(err); });
  //   Catdetails.create({

  //     thumbnailUrl: 'https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg',
  //     name: 'Bacon',
  //     birthdate: '2012-05-21',
  //     ownerName: 'Kate Debarros',
  //     viewCount: 0
  //     }).catch((err) => { console.log(err); });
  //     Catdetails.create({

  //       thumbnailUrl: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_1280.jpg',
  //       name: 'Porter',
  //       birthdate: '2015-01-30',
  //       ownerName: 'Kate Debarros',
  //       viewCount: 0
  //       }).catch((err) => { console.log(err); });
  //       Catdetails.create({

  //     thumbnailUrl: 'https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_1280.jpg',
  //     name: 'Cheese',
  //     birthdate: '2021-01-01',
  //     ownerName: 'Jane Doe',
  //     viewCount: 0
  //         }).catch((err) => { console.log(err); });
  //   console.log('Database & tables created!');
  // }).catch((err) => { console.log(err); });
  module.exports = sequelize;
  module.exports = Catdetails;