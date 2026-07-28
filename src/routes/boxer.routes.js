const express = require("express");

const {
  createBoxer,
  getBoxers,
  getBoxerById,
  updateBoxer,
  deleteBoxer,
} = require("../controllers/boxer.controller");

const validateRequest = require("../middlewares/validateRequest");

const {
  boxerIdValidator,
  createBoxerValidator,
  updateBoxerValidator,
} = require("../validators/boxer.validator");

const router = express.Router();

router.get("/", getBoxers);

router.get(
  "/:id",
  boxerIdValidator,
  validateRequest,
  getBoxerById
);

router.post(
  "/",
  createBoxerValidator,
  validateRequest,
  createBoxer
);

router.put(
  "/:id",
  boxerIdValidator,
  updateBoxerValidator,
  validateRequest,
  updateBoxer
);

router.delete(
  "/:id",
  boxerIdValidator,
  validateRequest,
  deleteBoxer
);

module.exports = router;
