const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const socialitSchema = new Schema({
  link: {
    type: String,
    required: false
  },
  upvotes: {
    type: Number,
    required: false,
    default: 0
  },
  body: {
    type: String,
    required: true
  },
  edited: {
    type: Boolean,
    default: 0
  },
  editedDate: {
    type: Date,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  channel: {
    type: Schema.Types.ObjectId,
    ref: "Channel"
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const socialit = mongoose.model("socialit", socialitSchema);

module.exports = socialit;
