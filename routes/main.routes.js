/*    Main routes.    */

// Setup.
const express = require("express");
const router = express.Router();
const CervezaModel = require("../models/Cerveza.model");

// Routes.
router.get("/cervezas", (req, res, next) => {
  CervezaModel.find()
    .then((cervezas) => {
      res.status(200).json(cervezas);
    })
    .catch((err) => {
      console.log("Something went horribly wrong.", err);
    });
});

module.exports = router;
