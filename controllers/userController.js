const models = require('../models/index');

exports.index = (req, res, next) => {
    models.User.findAll({
        // model: models.Address,
        // required: true
        // include: [models.Address],
        include: [
            {
                model: models.Address,
                required: false  // Include users even if they do not have associated addresses
            }
        ],
        where: {
            status: [1],
        },
        order: [
            ['id', 'desc']
            // [{ model: models.Address }, 'city', 'ASC']
        ]
    })
    .then(users => {
        if (users.length > 0 && users[0].Addresses && users[0].Addresses.length > 0) {
            console.log(JSON.stringify(users[0].Addresses[0].city, null, 2));
        }
        // console.log(JSON.stringify(users[0].Addresses[0].city, null, 2));
        // console.log(JSON.stringify(users, null, 2));
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

