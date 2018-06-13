
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {
            title: 'task1',
            start_time: '12.12',
            end_time: '12.30',
            date: new Date()
        },
        {
            title: 'task2',
            start_time: '12.12',
            end_time: '13.30',
            date: new Date()
        },
      ]);
    });
};
