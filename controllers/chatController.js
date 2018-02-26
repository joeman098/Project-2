const db = require("../models");

// Defining methods for the booksController
module.exports = {
    sendMessage: function (req, res) {
        const message = req.body;
        db.Message.create({
            sender: message.sender,
            message: message.message
        }).then(function (result) {
            db.Chat.updateOne({ _id: message.chatId }, { $push: { messages: result._id } })
                .then(function (result) {
                    res.json("success");
                })
                .catch(err => console.log(err));

        });
    },
    isAllowedIntoChat: function (req, res) {
        const data = req.body;
        const chatId = data.chatId;
        const userId = data.userId;

        db.Chat.find({ _id: chatId })
            .then(function (result) {
                const chat = result[0];
                const participants = chat.participants;
                if (participants.indexOf(userId) == -1) {
                    return res.json(false);
                } else {
                    return res.json(true);
                }
            })
            .catch(err => console.log(err));


    },
    getMessages: function (req, res) {
        const data = req.body;
        const chatId = data.chatId;
        db.Chat.find({ _id: chatId })
            .populate("messages")
            .then(function (result) {
                res.json(result[0].messages);
            })
            .catch(err => console.log(err));
    },
    getChat: function (req, res) {
        const data = req.body;
        const chatId = data.chatId;
        db.Chat.find({ _id: chatId })
            .populate("messages")
            .populate("participants")
            .then(function (result) {
                res.json(result[0]);
            })
            .catch(err => console.log(err));
    },

};
