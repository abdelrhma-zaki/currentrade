//db_connection...
require("./back/connection.js");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const body = require("body-parser");
const cookie = require("cookie-parser");
const app = express();
dotenv.config();

const port = process.env.PORT;
const host = process.env.THEHOST;

app.use(
  cors({
    origin: `http://${host}:${port}`,
    credentials: true,
  })
);

app.use(body.json());
app.use(cookie());
app.use(express.static("./front"));

const apiRouter = require("./back/queries.control");
app.use("/api", apiRouter);

const router = require("./back/router");
app.use("/", router);

app.listen(port, () => {
  console.log(`http://${host}:${port}`);
});
