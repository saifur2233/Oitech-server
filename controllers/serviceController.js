const { default: mongoose } = require("mongoose");
const Service = require("../models/Service");
const catchAsync = require("../utils/catchAsync");

exports.createService = catchAsync(async (req, res, next) => {
  const { name, smallimg, largeimg, subtitle, description } = req.body;

  const serviceObj = new Service({
    _id: new mongoose.Types.ObjectId(),
    name,
    smallimg,
    largeimg,
    subtitle,
    description,
  });

  return serviceObj
    .save()
    .then((serviceObj) => res.status(201).json({ serviceObj }))
    .catch((error) => res.status(500).json({ error }));
});

exports.getAllServices = catchAsync(async (req, res, next) => {
  return Service.find()
    .then((allServices) => res.status(200).json({ allServices }))
    .catch((error) => res.status(500).json({ error }));
});
