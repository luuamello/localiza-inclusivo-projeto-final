require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("./database/mongooseConnect");
const restauranteRoutes = require("./routes/restaurantesRouter");


app.use(express.json());
app.use(cors());

mongoose.connect();

app.use("/restaurante", restauranteRoutes);

module.exports = app;