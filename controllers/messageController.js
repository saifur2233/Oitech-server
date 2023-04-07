const { default: mongoose } = require("mongoose");
const Message = require("../models/Message");
const catchAsync = require("../utils/catchAsync");

exports.SendMessage = catchAsync(async (req, res, next) => {
  const { name, email, subject, message } = req.body;

  const msgObj = new Message({
    _id: new mongoose.Types.ObjectId(),
    name,
    email,
    subject,
    message,
  });

  return msgObj
    .save()
    .then((msgObj) => res.status(201).json({ msgObj }))
    .catch((error) => res.status(500).json({ error }));
});

exports.getAllSendMsg = catchAsync(async (req, res, next) => {
  return Message.find()
    .then((allMsg) => res.status(200).json({ allMsg }))
    .catch((error) => res.status(500).json({ error }));
});
