const express = require("express");
const cors = require("cors");
const planetsRouter = require("./routes/planets/planets.router");

const app = express();

app.use(
  cors({
    origin: "https://localhost:3000",
  })
);
app.use(express.json());
app.use(planetsRouter);

module.exports = app;
