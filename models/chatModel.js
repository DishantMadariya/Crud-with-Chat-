const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    room: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Chat', chatSchema);

