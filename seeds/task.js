
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
            date: formatDate(new Date())
        },
        {
            title: 'task2',
            start_time: '12.12',
            end_time: '13.30',
            date: formatDate(new Date())
        },
      ]);
    });
    function formatDate(date) {
        let day = date.getDate();
        let monthIndex = (date.getMonth()+1);
        let year = date.getFullYear();
        console.log(day);
        return day + '/' + monthIndex + '/' + year;
    }
};
