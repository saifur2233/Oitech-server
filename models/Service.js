const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ServiceModelSchema = new Schema({
  name: String,
  smallimg: String,
  largeimg: String,
  processimg: String,
  subtitle: String,
  description: String,
});

const ServiceModel = mongoose.model("Service", ServiceModelSchema);

module.exports = ServiceModel;
