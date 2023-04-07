const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MsgModelSchema = new Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const MessageModel = mongoose.model("Message", MsgModelSchema);

module.exports = MessageModel;
