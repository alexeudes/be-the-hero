
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments(); // campo com auto incremento

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        // Relacionamento com o id da table de ong
        table.string('ong_id').notNullable();

        // Cria a foreign key referenciando a outra table
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
