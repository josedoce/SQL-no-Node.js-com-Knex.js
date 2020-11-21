const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile.development)
//aqui eu exporto o knex para ser usado
module.exports = knex;