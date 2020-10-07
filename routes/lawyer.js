const { Lawyer, LawyerSchema, validateLawyer } = require("../models/lawyer");
const express = require("express");

const router = express.Router();

// -------------------------------------------- HTTP GET request ---------------------------------

router.get("/", async (req, res, next) => {
  res.json(await Lawyer.find().sort("name"));
});

router.get("/:id", async (req, res) => {
  const lawyer = await Lawyer.findById(req.params.id);
  if (!lawyer) res.status(404).send("Can not find this Lawyer");

  res.send(lawyer);
});

router.post("/", async (req, res, next) => {
  const { error } = validateLawyer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let id = (await Lawyer.find().Collection.estimatedDocumentCount()) + 1;
  let lawyer = new Lawyer({ id: id, name: req.body.name });
  lawyer = await lawyer.save();

  res.send(lawyer);
});

router.put("/:id", async (req, res) => {
  const { error } = validateLawyer(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const lawyer = await Lawyer.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    {
      new: true,
    }
  );

  if (!lawyer)
    return res.status(404).send("The laywer with the given ID was not found.");

  res.send(lawyer);
});

router.delete("/:id", async (req, res) => {
  const lawyer = await Lawyer.findByIdAndRemove(req.params.id);

  if (!lawyer) {
    res.send(404).send("Can not find Lawyer");
  }

  res.send(lawyer);
});

module.exports = router;
