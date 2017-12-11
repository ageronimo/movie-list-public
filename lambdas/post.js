const Pool = require('pg-pool');
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

let postMovie = `INSERT INTO MOVIES (id, title, year, genre) VALUES ();`;

module.exports.post = (param) => {

};
