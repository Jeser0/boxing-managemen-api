const { body, param } = require("express-validator");

const boxerIdValidator = [
  param("id")
    .isMongoId()
    .withMessage("El ID del boxeador no es válido"),
];

const createBoxerValidator = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 caracteres"),

  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("El apellido es obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("El apellido debe tener entre 2 y 50 caracteres"),

  body("nickname")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 50 })
    .withMessage("El apodo no puede superar los 50 caracteres"),

  body("birthDate")
    .optional({ checkFalsy: true })
    .isISO8601()
    .withMessage("La fecha de nacimiento debe tener formato YYYY-MM-DD")
    .toDate(),

  body("weight")
    .notEmpty()
    .withMessage("El peso es obligatorio")
    .isFloat({ gt: 0, lte: 300 })
    .withMessage("El peso debe ser mayor que 0 y no superar 300 kg")
    .toFloat(),

  body("height")
    .notEmpty()
    .withMessage("La altura es obligatoria")
    .isFloat({ gt: 0.5, lte: 3 })
    .withMessage("La altura debe estar expresada en metros")
    .toFloat(),

  body("category")
    .trim()
    .notEmpty()
    .withMessage("La categoría es obligatoria")
    .isLength({ max: 50 })
    .withMessage("La categoría no puede superar los 50 caracteres"),

  body("wins")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Las victorias deben ser un número entero igual o mayor que 0")
    .toInt(),

  body("losses")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Las derrotas deben ser un número entero igual o mayor que 0")
    .toInt(),

  body("draws")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Los empates deben ser un número entero igual o mayor que 0")
    .toInt(),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("isActive debe ser true o false")
    .toBoolean(),
];

const updateBoxerValidator = [
  body("firstName")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("El nombre no puede estar vacío")
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 caracteres"),

  body("lastName")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("El apellido no puede estar vacío")
    .isLength({ min: 2, max: 50 })
    .withMessage("El apellido debe tener entre 2 y 50 caracteres"),

  body("nickname")
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage("El apodo no puede superar los 50 caracteres"),

  body("birthDate")
    .optional()
    .isISO8601()
    .withMessage("La fecha de nacimiento debe tener formato YYYY-MM-DD")
    .toDate(),

  body("weight")
    .optional()
    .isFloat({ gt: 0, lte: 300 })
    .withMessage("El peso debe ser mayor que 0 y no superar 300 kg")
    .toFloat(),

  body("height")
    .optional()
    .isFloat({ gt: 0.5, lte: 3 })
    .withMessage("La altura debe estar expresada en metros")
    .toFloat(),

  body("category")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("La categoría no puede estar vacía")
    .isLength({ max: 50 })
    .withMessage("La categoría no puede superar los 50 caracteres"),

  body("wins")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Las victorias deben ser un número entero igual o mayor que 0")
    .toInt(),

  body("losses")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Las derrotas deben ser un número entero igual o mayor que 0")
    .toInt(),

  body("draws")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Los empates deben ser un número entero igual o mayor que 0")
    .toInt(),

  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("isActive debe ser true o false")
    .toBoolean(),
];

module.exports = {
  boxerIdValidator,
  createBoxerValidator,
  updateBoxerValidator,
};
