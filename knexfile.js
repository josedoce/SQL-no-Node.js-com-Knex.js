// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    version: '8.5',
    connection: {
      host: process.env.SECRET_KEY_HOST,
      user: process.env.SECRET_KEY_USER,
      password: process.env.SECRET_KEY_PASS,
      database: process.env.SECRET_KEY_DB,
    },

    migrations: {
     directory: './src/db/migrations'
    },

    seeds: {
      directory: './src/db/seeds'
    }
  },
  onUpdateTrigger: table  => `
  CREATE TRIGGER ${table}_updated_at
  BEFORE UPDATE ON ${table}
  FOR EACH ROW
  EXECUTE PROCEDURE on_update_timestamp();
  `
  
};
