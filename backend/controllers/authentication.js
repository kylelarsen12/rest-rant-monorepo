//Dependencies
const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");

const { User } = db;

//Routes
router.post("/", async (req, res) => {
  console.log("IN HERE");
});

module.exports = router;
