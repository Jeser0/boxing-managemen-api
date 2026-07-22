const mongoose = require("mongoose");
const dns = require("node:dns");

// DNS públicos para resolver correctamente la dirección SRV de MongoDB Atlas.
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDatabase = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("Falta MONGODB_URI en el archivo .env");
  }

  await mongoose.connect(mongoUri);

  console.log("Conexión a MongoDB Atlas establecida correctamente");
};

module.exports = connectDatabase;