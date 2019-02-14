
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route'); 

const app = express();
let dev_db_url = ('mongodb://admin:123456@127.0.0.1:27017/dbbank2?authSource=admin');
const mongoDB = process.env.MONGODB_URI || dev_db_url;

app.set('view engine', 'ejs')

mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', route);

let port = 5000;

app.listen(port, () => {
    console.log('Server is up and running on port ' + port);
});