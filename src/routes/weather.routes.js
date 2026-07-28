const express = require("express");

const {
  getTrainingWeather,
} = require("../controllers/weather.controller");

const router = express.Router();

router.get("/training", getTrainingWeather);

module.exports = router;
