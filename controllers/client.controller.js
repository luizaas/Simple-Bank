const Client = require('../models/client.model');

exports.clientCreate =  (req, res) => {
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
        res.status(200).json(client);
    })
    .catch(err => {
        console.log(err);
        res.send("Sorry occur an error try aggain later");
    });
};

exports.showAllBalance = (req, res) => {
    Client.find({},'name account balance')
    .lean()
    .exec((err, client) => {
            if (err) {
            return res.send(err);
            }
            res.send(client);
        }    )
    
}