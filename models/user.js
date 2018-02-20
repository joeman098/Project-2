var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var UserSchema = new Schema({
    TwitchId: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    lastLogin: {
        type: Date,
        required: false
    },
    status: {
        type: String,
        enum: ['active', 'inactive']
    },
    email: {
        type: String,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    avatar: {
        type: String,
        required: false
    },
    bio: {
        type: Text,
        required: false
    },
    interests: {
        type: String,
        required: false
    },
    dob: {
        type: Date,
        required: false
    },
    memes: {
        type: Schema.Types.ObjectId,
        ref: "Meme"
    },
    blocked: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    friends: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    messages: {
        type: Schema.Types.ObjectId,
        ref: "Message"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var User = mongoose.model("User", UserSchema);

module.exports = Meme;
