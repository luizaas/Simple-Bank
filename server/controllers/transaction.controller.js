const Transaction = require('../models/transaction.model');

exports.showAllTransactionFromDate = (req, res) => {
    Transaction.findAllTransactionsFromDate( req.params.date,(err, trans) => {
        if (err) {
          return res.send(err);
        }
        res.json(trans);
    });
}

exports.showAllTransactionFromClient = (req, res) => {
    Transaction.findAllTransactionsFromClient(req.params.client, 
        (err, trans) => {
            if (err) {
            return res.send(err);
            }
            res.send(trans);
        }    
    )
}

transactionCreate = (req, res) => {
    // verify if the source acount and the destination acount exists
    // verify if the source has sufficient balance for transaction
    // update source's and destination's balance
    //create the transaction and save them
}
