const Boxer = require("../models/boxer.model");

const createBoxer = async (req, res, next) => {
  try {
    const boxer = await Boxer.create(req.body);

    return res.status(201).json({
      message: "Boxeador creado correctamente",
      boxer,
    });
  } catch (error) {
    return next(error);
  }
};

const getBoxers = async (req, res, next) => {
  try {
    const boxers = await Boxer.find().sort({ createdAt: -1 });

    return res.status(200).json({
      count: boxers.length,
      boxers,
    });
  } catch (error) {
    return next(error);
  }
};

const getBoxerById = async (req, res, next) => {
  try {
    const boxer = await Boxer.findById(req.params.id);

    if (!boxer) {
      return res.status(404).json({
        message: "Boxeador no encontrado",
      });
    }

    return res.status(200).json({
      boxer,
    });
  } catch (error) {
    return next(error);
  }
};

const updateBoxer = async (req, res, next) => {
  try {
    const boxer = await Boxer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!boxer) {
      return res.status(404).json({
        message: "Boxeador no encontrado",
      });
    }

    return res.status(200).json({
      message: "Boxeador actualizado correctamente",
      boxer,
    });
  } catch (error) {
    return next(error);
  }
};

const deleteBoxer = async (req, res, next) => {
  try {
    const boxer = await Boxer.findByIdAndDelete(req.params.id);

    if (!boxer) {
      return res.status(404).json({
        message: "Boxeador no encontrado",
      });
    }

    return res.status(200).json({
      message: "Boxeador eliminado correctamente",
      boxer,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createBoxer,
  getBoxers,
  getBoxerById,
  updateBoxer,
  deleteBoxer,
};
