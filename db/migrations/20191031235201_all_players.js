exports.up = function(knex, Promise) {
  return knex.schema.createTable('all_players', function (table) {
    table.integer('id')
    table.string('position');
    table.string('name');
    table.string('team');
    table.unique('id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('all_players');
};
