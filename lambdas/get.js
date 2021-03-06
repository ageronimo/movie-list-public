'use strict';

// require in pg pool
const Pool = require('pg-pool');
const config = require('./config.json');
const { table, host, database, user, password, port } = config
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
// let getAllMovies = "SELECT * FROM " + table + "ORDER BY id ASC";
let getAllMovies = 'select * from movies;';

module.exports.get = (event, context, callback) => {

console.log('running GET function...');

  Client.connect()
  .then(client => {
    console.log('connected to DB' + Client.options.database);
    client.release();
    return client.query(getAllMovies)
  })
  .then(res => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        message: res
        // input: event,
      }),
    };

    callback(null, response);
  })

};
