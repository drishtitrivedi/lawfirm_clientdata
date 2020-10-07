const Joi = require("joi");
const mongoose = require("mongoose");

const LawyerSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
});

const Lawyer = mongoose.model("Lawyer", LawyerSchema);

function validateLawyer(lawyer) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  //return Joi.validate(lawyer, schema);
  return schema.validate(lawyer);
}

exports.Lawyer = Lawyer;
exports.validateLawyer = validateLawyer;
exports.LawyerSchema = LawyerSchema;
