const { onUpdateTrigger } = require('../../../knexfile');

exports.up = async function(knex) {
  //essa função tem sempre que retornar uma promessa
  return knex.schema
  .createTable('users', function(table){
    table.increments('id');
    table.string('primeiro_nome',255).notNullable();
    table.string('ultimo_nome',255).notNullable();
    
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    
  }).then(() => knex.raw(onUpdateTrigger('users')))
};

exports.down = async function(knex) {
    return knex.schema
    .dropTable('users')
    //down faz o drope ser desfeito
};
