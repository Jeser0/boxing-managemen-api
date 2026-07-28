const errorHandler = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  console.error(error);

  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return res.status(400).json({
      message: "El cuerpo de la solicitud contiene un JSON inválido",
    });
  }

  if (error.name === "CastError") {
    return res.status(400).json({
      message: "El identificador enviado no es válido",
    });
  }

  if (error.name === "ValidationError") {
    return res.status(400).json({
      message: "Los datos enviados no son válidos",
      errors: Object.values(error.errors).map((item) => ({
        field: item.path,
        message: item.message,
      })),
    });
  }

  const statusCode = error.statusCode || 500;

  return res.status(statusCode).json({
    message:
      statusCode === 500
        ? "Ocurrió un error interno en el servidor"
        : error.message,
  });
};

module.exports = errorHandler;
