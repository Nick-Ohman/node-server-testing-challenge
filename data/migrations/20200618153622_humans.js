
exports.up = function(knex) {
  return knex.schema.createTable("humans", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable()
      tbl.string("superPower", 255)
    
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("humans")
};
