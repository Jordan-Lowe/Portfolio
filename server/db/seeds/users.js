exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('userInfoTBL')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('userInfoTBL').insert([
        {
          id: 1,
          name: 'banana',
          email: 'jord@123',
          cellNumber: 123,
          enquiry: 'Job Pls',
        },
        {
          id: 2,
          name: 'Mango',
          email: 'Mir@1234',
          cellNumber: 456,
          enquiry: 'Multiple Job Pls',
        },
      ])
    })
}
