/*To Connect with DB */

const Sequelize = require('sequelize');
module.exports = new Sequelize('new_db', 'postgres', 'newpassword', {
  host: 'localhost',
  dialect:'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },


});
