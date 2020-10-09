const { Client, ClientSchema, validate } = require("../models/client");
const express = require("express");

const router = express.Router();

// -------------------------------------------- HTTP GET request ---------------------------------

router.get("/", async (req, res, next) => {
  const clients = await Client.find();
  res.send(clients);
});

router.get("/:id", async (req, res) => {
  const client = await Client.findById(req.params.id);
  if (!client) res.status(404).send("Can not find this Client");

  res.send(client);
});

// -------------------------------------------- HTTP POST request ---------------------------------

router.post("/", async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let client = new Client({
    fname: req.body.fname,
    lname: req.body.lname,
    address: req.body.address,
    phone: req.body.phone,
    assigned_lawyer: req.body.assigned_lawyer,
    notes: req.body.notes,
    date_added: new Date(),
  });

  client = await client.save();
  res.send(client);
});

// -------------------------------------------- HTTP PUT request ---------------------------------

router.put("/:id", async (req, res) => {
  console.log(req.body);
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let client = await Client.findById(req.params.id);
  if (!client)
    return res.status(404).send("The client with the given ID was not found.");

  const result = await Client.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        fname: req.body.fname,
        lname: req.body.lname,
        address: req.body.address,
        phone: req.body.phone,
        assigned_lawyer: req.body.assigned_lawyer,
      },
    }
  );
  client = await Client.findById(req.params.id);
  res.send(client);
});

// -------------------------------------------- HTTP DELETE request ---------------------------------

router.delete("/:id", async (req, res) => {
  const client = await Client.findByIdAndRemove(req.params.id);

  if (!client) {
    res.send(404).send("Can not find Client");
  }

  res.send(client);
});

module.exports = router;
