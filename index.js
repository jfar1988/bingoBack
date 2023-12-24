const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

//Servidor
const app = express();

//Conectar con la base de datos
conectarDB();

//Habilitar Cors
const opcionesCors = {
  origin: process.env.FRONTEND_URL,
};
app.use(cors(opcionesCors));

// Puerto de la app
const port = process.env.PORT || 4000;

//Habilitar leer los valores de un body
app.use(express.json());

//Rutas de la app
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));

//Arrancar la app
app.listen(port, "0.0.0.0", () => {
  console.log(`El servidor funciona en el puerto ${port}`);
});
