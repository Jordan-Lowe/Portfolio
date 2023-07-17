exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('languageInfoTBL')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('languageInfoTBL').insert([
          {
            id: 1,
            language_name: 'Typescipt/Javascript',
            language_info: 'jord@123',
          },
          {
            id: 2,
            language_name: 'React',
            language_info: 'jord@123',
          },
          {
            id: 3,
            language_name: 'HTML/CSS',
            language_info: 'jord@123',
          },
          {
            id: 4,
            language_name: 'SQL',
            language_info: 'jord@123',
          },
          {
            id: 5,
            language_name: 'React Queries & Redux',
            language_info: 'jord@123',
          },
          {
            id: 6,
            language_name: 'Github',
            language_info: 'jord@123',
          },
          {
            id: 7,
            language_name: 'Vitest & Jest',
            language_info: 'jord@123',
          },
          {
            id: 8,
            language_name: 'Python',
            language_info: 'jord@123',
          },
        ])
      })
  }
  