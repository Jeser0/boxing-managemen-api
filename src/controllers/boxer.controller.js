const Boxer = require("../models/boxer.model");

const createBoxer = async (req, res) => {
  try {
    const boxer = await Boxer.create(req.body);

    return res.status(201).json({
      message: "Boxeador creado correctamente",
      boxer,
    });
  } catch (error) {
    return res.status(400).json({
      message: "No se pudo crear el boxeador",
      error: error.message,
    });
  }
};

const getBoxers = async (req, res) => {
  try {
    const boxers = await Boxer.find().sort({ createdAt: -1 });

    return res.status(200).json({
      count: boxers.length,
      boxers,
    });
  } catch (error) {
    return res.status(500).json({
      message: "No se pudieron obtener los boxeadores",
      error: error.message,
    });
  }
};

module.exports = {
  createBoxer,
  getBoxers,
};
