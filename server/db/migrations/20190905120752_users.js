exports.up = function (knex) {
  return knex.schema.createTable('userInfoTBL', (table) => {
    table.increments('id')
    table.string('name')
    table.string('email')
    table.integer('cellNumber')
    table.string('enquiry')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('userInfoTBL')
}
