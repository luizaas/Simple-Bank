const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema({
    name: {type: String, required: true, max: 50},
    age: {type: Number, required: true},
    account: {type: String, required: true, max: 8},
    address: {type: String, required: true, max: 100},
    balance: {type: Number},
});


// Export the model
module.exports = mongoose.model('Client', ClientSchema);