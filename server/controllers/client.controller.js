const Client = require('../models/client.model');

exports.clientCreate = (req, res) => {
    let client = new Client(
        {
            name: req.body.name,
            age: req.body.age,
            address: req.body.address,
            account: req.body.account,
            balance: req.body.balance
        }
    );

    client.save()
        .then(result => {
            res.status(200).json({ sucess: true, data: client });
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ sucess: false });
        });
};

exports.showAllBalance = (req, res) => {
    Client.find({}, 'name account balance')
        .lean()
        .exec((err, client) => {
            if (err) {
                return res.status(404).json({ sucess: false });
            }
            res.status(200).json({ sucess: true, data: client });
        })

}