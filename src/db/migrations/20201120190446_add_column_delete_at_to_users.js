//criação da tabela 
exports.up = function(knex) {
    return knex.schema
    .alterTable('users', function(table){
      table.timestamp('deleted_at')
    })
  };
  
exports.down = function(knex) {
    return knex.schema
    .alterTable('users', function(table){
      table.dropColumn('deleted_at')
    })
  };