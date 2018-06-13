
exports.up = function(knex, Promise) {
  return knex.schema.createTable('task', (table) => {
      table.increments();
      table.text('title').notNullable;
      table.text('start_time').notNullable();
      table.text('end_time').notNullable();
      table.boolean('done').defaultTo(false).notNullable();
      table.datetime('date').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('task');
};
