require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("./database/mongooseConnect");
const restauranteRoutes = require("./routes/restaurantesRouter");
const loginRoutes = require("./routes/loginRouter");

app.use(express.json());
app.use(cors());
app.use("/login", loginRoutes);
mongoose.connect();

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger/swagger_output.json");

app.use("/minha-rota-de-documentacao", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/restaurante", restauranteRoutes);

module.exports = app;
