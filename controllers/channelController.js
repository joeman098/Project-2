const db = require("../models");

// Defining methods for the channelController
module.exports = {
    getMemesByChannelName: function (req, res) {
        const channelName = req.body.channelName;
        db.Channel.find({
            name: channelName
        }).then(function (result) {
            const channelId = result[0]._id
            db.Meme.find({ // find Memes for channel by name
                channel: channelId
            })
                .then(function (result) {
                    res.json(result);
                })
                .catch(err => console.log(err));;
        })
            .catch(err => console.log(err));;
    },
    getMemesByChannelTwitchId: function (req, res) {
        const TwitchId = req.body.TwitchId;
        db.Channel.find({
            TwitchId: TwitchId
        }).then(function (result) {
            const channelId = result[0]._id
            db.Meme.find({ // find Memes for channel  by twitch id
                channel: channelId
            })
                .then(function (result) {
                    res.json(result);
                })
                .catch(err => console.log(err));;
        })
            .catch(err => console.log(err));;
    },
    getMemesByChannelId: function (req, res) {
        const channelId = req.body.channelId;
        db.Meme.find({ // find Memes for channel  by channel mongo id
            channel: channelId
        }).then(function (result) {
            res.json(result);
        })
            .catch(err => console.log(err));
    },
    createChannel: function (req, res) {
        const channel = req.body;
        db.Channel.find({
            name: channel.name
        }).then(function (result) {
            if (!result) {
                db.Channel.create({ channel }).then(function (result) {
                    return res.json("Added New Channel!");
                });
            } else {
                return res.json("Channel already exists!");
            }
        })
            .catch(err => console.log(err));
    }
};

