const express = require("express");

const {
  createBoxer,
  getBoxers,
} = require("../controllers/boxer.controller");

const router = express.Router();

router.get("/", getBoxers);
router.post("/", createBoxer);

module.exports = router;
