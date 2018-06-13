var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* POST a form. */
router.post('/', function(req, res) {
    let task = {
        title: req.body.title,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        done: req.body.done,
        date: new Date()
    };
    knex('task')
        .insert(task)
        .then(() => {
            res.redirect('/');
        });
});

module.exports = router;
