const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");

const { errorHandler } = require("./middleware/errorMiddleware");

const port = process.env.PORT || 5000;

const recordRotues = require("./routes/recordRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/api/records", recordRotues);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
