const mongoose = require("mongoose");
const Joi = require("joi");
const { LawyerSchema } = require("./lawyer");

function validateClient(client) {
  const schema = Joi.object({
    fname: Joi.string().min(5).max(50).required(),
    lname: Joi.string().min(5).max(50).required(),
    address: Joi.string().min(5).max(500).required(),
    phone: Joi.string().min(10).max(10).required(),
    assigned_lawyer: Joi.required(),
    notes: Joi.required(),
  });

  return schema.validate(client);
}

const Client = mongoose.model(
  "Client",
  new mongoose.Schema({
    fname: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    lname: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    address: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 500,
    },
    phone: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 10,
    },
    assigned_lawyer: LawyerSchema,
    notes: {
      type: String,
      required: true,
    },
    date_added: {
      type: Date,
      required: true,
    },
  })
);

exports.Client = Client;
exports.validate = validateClient;
