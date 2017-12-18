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
const mock = JSON.parse(require('../test-data/post.json'));

// let values = ['id', 'title', 'year', 'genre'];


module.exports.post = (param) => {
  mock.forEach(obj => {
    let postMovie = `insert into movies values (${obj.id}, ${obj.title}, ${obj.year}, ${obj.genre});`
    let getAllMovies = 'select * from movies;';

    Client.connect()
    .then(client => {
      console.log('connected to DB' + Client.options.database);
      client.release();
      client.query(postMovie);
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

  });

};
