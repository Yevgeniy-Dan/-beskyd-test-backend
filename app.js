const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");

connectDB();

const { errorHandler } = require("./middleware/errorMiddleware");

const port = process.env.PORT || 5000;

const recordRotues = require("./routes/recordRoutes");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URI,
  })
);

app.use(bodyParser.json());

app.use("/api/records", recordRotues);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
