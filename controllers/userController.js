const models = require('../models/index');

exports.index = (req, res, next) => {
    models.User.findAll()
    .then(users => {
        // console.log(users);
        res.render('user/list', {
            users: users,
            pageTitle: 'All Users',
            index: 'user',
        });
    })
    .catch(err => {
        console.log(err);
    })
}