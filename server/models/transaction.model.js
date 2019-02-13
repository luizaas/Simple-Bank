const mongoose = require('mongoose');

var schema = new mongoose.Schema({
        sourceAccount: {type: String, required:true ,index:true, max: 8, min: 8},
        destinationAccount: {type: String, required:true ,index:true, max: 8, min: 8},
        date: {type: Date,  default: Date.now()},
        value: {type: Number, required: true},
    });

var TransactionModel = mongoose.model('transaction', schema);

let Transaction = {}

Transaction.addTransaction = ( source, destination, date, value) => {
    TransactionModel.create(
        {
            sourceAccount: source,
            destinationAccount: destination,
            date: date,
            value: value
        }
    );
}

Transaction.findAllTransactionsFromClient = (client,callback) => {
    TransactionModel.find({
            $or:[
                {'sourceAccount': client},
                {'destinationAccount': client}
            ]
    })
    .lean()
    .exec(callback)
}

Transaction.findAllTransactionsFromDate = (date ,callback) => {
    TransactionModel.find({
        'date':{"$gte": new Date(date+"T00:00:00Z") , "$lte": new Date(date+"T23:59:59Z")}
    })
    .lean()
    .exec(callback)
}
//
// Export the model
module.exports =  Transaction;