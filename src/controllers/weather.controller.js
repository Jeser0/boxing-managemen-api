const axios = require("axios");

const buildTrainingRecommendation = ({
  temperature,
  precipitation,
  windSpeed,
}) => {
  if (precipitation > 0) {
    return "Se recomienda realizar el entrenamiento en un espacio cubierto por presencia de precipitaciones.";
  }

  if (temperature >= 35) {
    return "Se recomienda evitar el entrenamiento intenso al aire libre por la temperatura elevada.";
  }

  if (temperature <= 5) {
    return "Se recomienda realizar una entrada en calor más prolongada por la temperatura baja.";
  }

  if (windSpeed >= 40) {
    return "Se recomienda entrenar en un espacio cubierto por la velocidad del viento.";
  }

  return "Las condiciones actuales son adecuadas para realizar un entrenamiento al aire libre.";
};

const getTrainingWeather = async (req, res) => {
  const latitude = Number(req.query.latitude);
  const longitude = Number(req.query.longitude);

  if (
    !Number.isFinite(latitude) ||
    latitude < -90 ||
    latitude > 90
  ) {
    return res.status(400).json({
      message: "La latitud debe ser un número entre -90 y 90",
    });
  }

  if (
    !Number.isFinite(longitude) ||
    longitude < -180 ||
    longitude > 180
  ) {
    return res.status(400).json({
      message: "La longitud debe ser un número entre -180 y 180",
    });
  }

  try {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast",
      {
        params: {
          latitude,
          longitude,
          current:
            "temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m",
          timezone: "auto",
        },
        timeout: 8000,
      }
    );

    const { current, current_units: currentUnits } = response.data;

    const recommendation = buildTrainingRecommendation({
      temperature: current.temperature_2m,
      precipitation: current.precipitation,
      windSpeed: current.wind_speed_10m,
    });

    return res.status(200).json({
      source: "Open-Meteo",
      requestedCoordinates: {
        latitude,
        longitude,
      },
      timezone: response.data.timezone,
      currentWeather: {
        time: current.time,
        temperature: {
          value: current.temperature_2m,
          unit: currentUnits.temperature_2m,
        },
        apparentTemperature: {
          value: current.apparent_temperature,
          unit: currentUnits.apparent_temperature,
        },
        precipitation: {
          value: current.precipitation,
          unit: currentUnits.precipitation,
        },
        windSpeed: {
          value: current.wind_speed_10m,
          unit: currentUnits.wind_speed_10m,
        },
        weatherCode: current.weather_code,
      },
      trainingRecommendation: recommendation,
    });
  } catch (error) {
    console.error("Error al consultar Open-Meteo:", error.message);

    return res.status(502).json({
      message: "No se pudo obtener la información de la API externa",
    });
  }
};

module.exports = {
  getTrainingWeather,
};
