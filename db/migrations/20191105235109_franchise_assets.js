
exports.up = function(knex) {
  return knex.schema.createTable('franchise_assets', function(table) {
    table.integer('id');
    table.specificType('draft_picks', 'text[]');
    table.decimal('faab_left');
    table.specificType('players', 'jsonb[]');
    table.unique('id');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('franchise_assets')
};
