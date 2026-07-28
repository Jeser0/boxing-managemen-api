const Boxer = require("../models/boxer.model");

const formatValidationErrors = (error) =>
  Object.values(error.errors).map((item) => item.message);

const handleControllerError = (error, res) => {
  if (error.name === "CastError") {
    return res.status(400).json({
      message: "El ID del boxeador no es válido",
    });
  }

  if (error.name === "ValidationError") {
    return res.status(400).json({
      message: "Los datos enviados no son válidos",
      errors: formatValidationErrors(error),
    });
  }

  console.error(error);

  return res.status(500).json({
    message: "Ocurrió un error interno en el servidor",
  });
};

const createBoxer = async (req, res) => {
  try {
    const boxer = await Boxer.create(req.body);

    return res.status(201).json({
      message: "Boxeador creado correctamente",
      boxer,
    });
  } catch (error) {
    return handleControllerError(error, res);
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
    return handleControllerError(error, res);
  }
};

const getBoxerById = async (req, res) => {
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
    return handleControllerError(error, res);
  }
};

const updateBoxer = async (req, res) => {
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
    return handleControllerError(error, res);
  }
};

const deleteBoxer = async (req, res) => {
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
    return handleControllerError(error, res);
  }
};

module.exports = {
  createBoxer,
  getBoxers,
  getBoxerById,
  updateBoxer,
  deleteBoxer,
};
