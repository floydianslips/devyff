
exports.up = function(knex, Promise) {
  return knex.schema.createTable('franchises', function(table) {
    table.integer('id');
    table.integer('division');
    table.string('name');
    table.decimal('waiver_balance');
    table.unique('id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('franchises')
};
