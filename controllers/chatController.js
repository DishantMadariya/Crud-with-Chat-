const Chat = require('../models/chatModel');

const sendMessage = async (message, room, senderId) => {
    const chatMessage = new Chat({ message, room, sender: senderId });
    await chatMessage.save();
    return chatMessage;
};

module.exports = { sendMessage };
