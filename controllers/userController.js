const models = require('../models/index');


exports.index = (req, res, next) => {
    models.User.findAll({
        // model: models.Address,
        // required: true
        include: [models.Address]
    })
    .then(users => {
        console.log(JSON.stringify(users[0].Addresses[0].city, null, 2));
        console.log(JSON.stringify(users, null, 2));
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


exports.indexOld = (req, res, next) => {
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

