const mongoose = require('mongoose');



module.exports = mongoose.connect('mongodb://localhost:27017/prash', function (err) {
    if (err) {
        console.log("db has problem check ")
    } else {
        console.log("db is connected");
    }
});