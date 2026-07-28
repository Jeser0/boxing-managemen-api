const notFound = (req, res) => {
  return res.status(404).json({
    message: "La ruta solicitada no existe",
    method: req.method,
    path: req.originalUrl,
  });
};

module.exports = notFound;
