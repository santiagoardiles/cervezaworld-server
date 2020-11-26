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

router.get("/cervezas/:cervezaId", (req, res, next) => {
  const id = req.params.cervezaId;
  console.log(id);

  CervezaModel.findById(id)
    .then((cerveza) => {
      res.status(200).json(cerveza);
    })
    .catch((err) => {
      console.log("Something went horribly wrong.", err);
    });
});

router.post("/cervezas/nueva", (req, res, next) => {
  const cerveza = req.body

  CervezaModel.create(cerveza)
    .then((res) => {
      console.log("A new cerveza was added.");
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
