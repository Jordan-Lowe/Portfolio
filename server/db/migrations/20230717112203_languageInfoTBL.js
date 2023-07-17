
exports.up = function(knex) {
    return knex.schema.createTable('languageInfoTBL', (table) => {
        table.increments('id')
        table.string('language_name')
        table.string('language_info')
      })
};


exports.down = function(knex) {
    return knex.schema.dropTable('languageInfoTBL')
};
