const express = require("express");
const app = express();
const router = require('./router');

app.use(express.urlencoded({extended: false})); // add user submited data to be accessed from req.body
app.use(express.json());
app.use(express.static('public'));
app.set('views','views')
app.set('view engine', 'ejs')


app.use('/', router);


module.exports = app;