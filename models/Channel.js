var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ChannelSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    TwitchId: {
        type: Number,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    meme: {
        type: Schema.Types.ObjectId,
        ref: "Meme"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var Channel = mongoose.model("Channel", ChannelSchema);

module.exports = Channel;
