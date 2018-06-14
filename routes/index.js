let express = require('express');
let router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res) => {
    knex('task')
        .select()
        .then( tasks => {
            res.render('index', {tasks: tasks});
        });
});

/* POST a form. */
router.post('/', (req, res) => {
    let task = {
        title: req.body.title,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        done: req.body.done,
        date: formatDate(new Date()),
    };
    knex('task')
        .insert(task)
        .then(() => {
            res.redirect('/');
        });
});

/* PUT request for editing. */
// router.put('/', (req, res) => {
//     const id = req.param('edit-button');
//     // knex('task')
//     //     .where('id', id)
//     //     .update()
//     //     .then(() => {
//     //        res.redirect('/')
//     //     });
//     res.redirect('/')
// });

/* DELETE request. */
router.delete('/', (req, res) => {
    const id = req.param('delete-button');
    knex('task')
        .where('id', id)
        .del()
        .then(() => {
            res.redirect('/')
        });
});

function formatDate(date) {
    let day = date.getDate();
    let monthIndex = (date.getMonth()+1);
    let year = date.getFullYear();
    console.log(day);
    return day + '/' + monthIndex + '/' + year;
}

module.exports = router;
