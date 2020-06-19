
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('humans').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('humans').insert([
        {name: 'Nick', superPower: 'Super quick'},
        {name: 'Sarah', superPower: 'Super Fast Coding'},
        {name: 'Kris', superPower: 'Super Strength'},
        {name: 'Scott', superPower: 'Super Witts'},
        
      ]);
    });
};
