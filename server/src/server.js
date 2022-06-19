const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
const { loadPlanetsData } = require("./models/planets.model");

const MONGO_URL =
  "mongodb+srv://AkhilJ321:Akhil123@cluster0.oo52r.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await loadPlanetsData();
}

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

startServer();
