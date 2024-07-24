const mongoose = require('mongoose');
const animalSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true,
    },
    habitat : {
        type: String,
        require: true,
    }
});

const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;