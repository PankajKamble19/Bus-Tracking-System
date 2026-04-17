const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const trackingRoutes = require("./routes/trackingRoutes");

app.use("/api/tracking", trackingRoutes);

const authRoutes = require("./routes/authRoutes");
const routeRoutes = require("./routes/routeRoutes");


app.use("/api/auth", authRoutes);
app.use("/api/routes", routeRoutes);


app.get('/', (req, res) => {
  res.send("Bus Tracking System Backend is Live 🚀");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
