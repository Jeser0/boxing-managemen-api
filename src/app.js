const express = require("express");
const cors = require("cors");

const boxerRoutes = require("./routes/boxer.routes");
const weatherRoutes = require("./routes/weather.routes");
const requestLogger = require("./middlewares/requestLogger");

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API de gestión de boxeo funcionando correctamente",
  });
});

app.use("/api/boxers", boxerRoutes);
app.use("/api/weather", weatherRoutes);

module.exports = app;
