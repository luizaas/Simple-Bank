const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ClientSchema = new Schema({
    name: {type: String, required: true, max: 50},
    age: {type: Number, required: true},
    account: {type: String,required: true, unique: true, index:true, max: 8, min: 8},
    address: {type: String, required: true, max: 100},
    balance: {type: Number, default: 0}
});


// Export the model
module.exports = mongoose.model('Client', ClientSchema);