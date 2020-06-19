// Update with your config settings.
const connectionString = process.env.DATABASE_URL;
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/humans.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },



  production: {
    client: 'pg',
    connection: 'connectionString',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
