/*    Cerveza model.    */
const { Schema, model } = require("mongoose");

const cervezaSchema = new Schema(
  {
    name: String,

    image: String,

    phrase: String,

    description: String,

    nutritionalInfo: Object,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Cerveza", cervezaSchema);
