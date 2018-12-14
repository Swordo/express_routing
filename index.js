const express = require('express')
const mongoose = require('mongoose');
const db = require('./db.js');
const user = require('./Router/user/');
const admin = require('./Router/admin/');
const rest = require('./Router/restaurant/');
const app = express();


app.use('/', user);
app.use('/', admin);
app.use('/', rest);


app.listen(8080, () => console.log(`Example app listening on port 8080!`))