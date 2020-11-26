/* Just to have some cervezas to work with. */

// Setup.
const mongoose = require("mongoose");
const CervezaModel = require("../models/Cerveza.model");
require("../config/db.config");

// List of cervezas.
const cervezas = [
  {
    name: "Astra Kiezmische",
    image: "https://i.imgur.com/9BM8sdU.jpg",
    phrase: "Mischt den Kiez auf.",
    description:
      "Das Radler auf St. Pauli-Art mit 2,5 % Alkohol. Prickelnde Mischung aus 50 % leckerem Astra Bier und 50 % fruchtiger, trüber Zitronenlimonade.",
    nutritionalInfo: {
      energy: "47 kcal",
      fatt: "0 g",
      carbohydrate: "6,6 g",
      protein: "0 g",
      salt: "0,003 mg",
    },
  },
  {
    name: "Astra Urtyp",
    image: "https://i.imgur.com/kUh1xfE.jpg",
    phrase: "Kühler Hamburger mit Herz.",
    description:
      "Das Original aus dem Jahre 1909: mild, feinwürzig und einfach lecker mit 4,9% Alkohol. Mit viel Liebe gebraut im Herzen Hamburgs.",
    nutritionalInfo: {
      energy: "38 kcal",
      fatt: "0 g",
      carbohydrate: "2,5 g",
      protein: "0,4 g",
      salt: "9,4 mg",
    },
  },
  {
    name: "Astra Rotlicht",
    image: "https://i.imgur.com/RClZcnY.jpg",
    phrase: "Nichts für Flaschen.",
    description:
      "Inspiriert von Hamburgs Rotlichtbezirk: das Astra mit ein bisschen mehr Schmackes! Mit kräftigem, süffigem Geschmack und 6,0 % Alkohol.",
    nutritionalInfo: {
      energy: "4 kcal",
      fatt: "0 g",
      carbohydrate: "2,8 g",
      protein: "0,4 g",
      salt: "11,8 mg",
    },
  },
];

// Adds the list of cervezas into de database.
CervezaModel.create(cervezas)
  .then((res) => {
    console.log("Data was added.");
    console.log(res);

    // Makes sure the connection to database is close.
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
