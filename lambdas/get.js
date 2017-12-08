'use strict';

// require in pg pool
const Pool =
const config = require('./config.json');
const { table, host, database, user, passord, port } = config
// object destructuring
const Client = new Pool({
  host,
  database,
  user,
  password,
  port,
  idleTimeoutMillis: 1000
});
// how do i connect to my database?

// make sql query string that is used to get data from db
// CORS

module.exports.get = (param) => {

  // .connect(), .then(), .release(), .query()

};
