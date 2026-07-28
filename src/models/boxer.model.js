const mongoose = require("mongoose");

const boxerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "El apellido es obligatorio"],
      trim: true,
    },
    nickname: {
      type: String,
      trim: true,
      default: "",
    },
    birthDate: {
      type: Date,
      required: [true, "La fecha de nacimiento es obligatoria"],
    },
    weight: {
      type: Number,
      required: [true, "El peso es obligatorio"],
      min: [1, "El peso debe ser mayor que cero"],
    },
    height: {
      type: Number,
      required: [true, "La altura es obligatoria"],
      min: [1, "La altura debe ser mayor que cero"],
    },
    category: {
      type: String,
      required: [true, "La categoría es obligatoria"],
      trim: true,
    },
    wins: {
      type: Number,
      default: 0,
      min: [0, "Las victorias no pueden ser negativas"],
    },
    losses: {
      type: Number,
      default: 0,
      min: [0, "Las derrotas no pueden ser negativas"],
    },
    draws: {
      type: Number,
      default: 0,
      min: [0, "Los empates no pueden ser negativos"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Boxer = mongoose.model("Boxer", boxerSchema);

module.exports = Boxer;
