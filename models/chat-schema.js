const mongoose = require('mongoose');


const chatSchema = new mongoose.Schema({
    content: String,
    name: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('chat', chatSchema);