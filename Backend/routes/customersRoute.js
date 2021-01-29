const express = require("express");

const router = express.Router();

const Customers = require("../models/customerModel.js");

// get all customers
router.get("/", function (req, res) {
  Customers.find({})
    .then((data) => {
      // console.log('data:', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error:", error);
    });
});

//add a new customer
router.post("/save", async (req, res) => {
  const data = req.body;

  const newCustomers = new Customers(data);

  await newCustomers.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Sorry, Internal server error.." });
    } else {
      res.json({ msg: "Your data saved Successfully" });
    }
  });
});

module.exports = router;
