const path = require("path");

const bodyParser = require("body-parser");
const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const winston = require("winston");

const logger = require("./config/logger");
const user = require("./routers/user");

//* DB
require("./config/db");

const app = express();

//* use cors
app.use(cors());

dotEnv.config({ path: "./config/config.env" });

//* set Custom Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//*set Logger
if (process.env.NODE_ENV === "development") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

//* set Statics
app.use(express.static(path.join(__dirname, "public")));

//* set Headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

//* Routes
app.use("/", user);
app.use("/post", require("./routers/post"));

const PORT = process.env.PORT || 8080;

app.listen(PORT);
