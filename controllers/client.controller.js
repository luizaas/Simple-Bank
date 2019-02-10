const Client = require('../models/client.model');

exports.client_create = function (req, res) {
    let client = new Client(
        {
            name: req.body.name,
            age: req.body.age,
            address: req.body.address,
            account: req.body.account,
            balance: req.body.balance
        }
    );

    client.save(function (err) {
        if (err) {
            console.log(err)
             next(err);
        }
        res.send('Client Created successfully')
    })
};