const express = require("express");

const {
  createBoxer,
  getBoxers,
  getBoxerById,
  updateBoxer,
  deleteBoxer,
} = require("../controllers/boxer.controller");

const router = express.Router();

router.get("/", getBoxers);
router.get("/:id", getBoxerById);
router.post("/", createBoxer);
router.put("/:id", updateBoxer);
router.delete("/:id", deleteBoxer);

module.exports = router;
