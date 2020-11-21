
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {primeiro_nome: 'josealdo', ultimo_nome: 'ferreira'},
        {primeiro_nome: 'maria', ultimo_nome: 'ribeiro'},
        {primeiro_nome: 'carlos', ultimo_nome: 'ferreira'},
        
      ]);
    });
};
