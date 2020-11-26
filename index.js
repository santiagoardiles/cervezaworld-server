/*    index.js    */

// Setup.
const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const logger = require("morgan");

// Database.
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
require("./config/db.config");
require("dotenv").config();

app.use(
  session({
    secret: "cerveza-polar",
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 60 * 60 * 24 * 1000,
    },

    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 60 * 60 * 24,
      autoRemove: "disabled",
    }),
  })
);

app.use(logger("dev"));

// Sets origin of the client.
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes.
const mainRoutes = require("./routes/main.routes");
app.use("/api", mainRoutes);

// Port.
const server = app.listen(process.env.PORT || 5501, "0.0.0.0", () => {
  console.log("Server is running at PORT 5501.");
});
