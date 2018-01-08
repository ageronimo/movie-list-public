const Pool = require('pg-pool');
const config = require('./config.json');
const { table, host, database, user, password, port } = config;
const Client = new Pool({
  host,
  database,
  user,
  password,
  port,
  idleTimeoutMillis: 1000
});
const data = require('../test-data/update.json');

// let values = ['id', 'title', 'year', 'genre'];
console.log(data);

module.exports.post = (event, context, callback) => {
    let updateMovie = //update query
    let getAllMovies = 'select * from movies;';

    Client.connect()
    .then(client => {
      console.log('connected to DB' + Client.options.database);
      client.release();
      client.query(update);
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
        }),
      };
      callback(null, response);

      })

};
