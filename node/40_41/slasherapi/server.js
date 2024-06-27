const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient;
const PORT = 8000;
require('dotenv').config();

let db,
    dbConnectionStr = process.env.MONGOPASS,
    dbName = "iconic-slashers"

// ensuring we can use ejs views
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// what port our app is listening on
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
  .then(client => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);

    app.get("/", (req, res) => {
      db.collection("slashers").find().toArray()
      .then(data => {
        res.render("index.ejs", {slashers: data})
      })
      .catch(error => console.error(error));
    });

  })
  .catch(error => console.error(error));





// creating the json
// const slasherIcons = {
//   "jason": {
//     "age": 78,
//     "birthName": "jason voorhees",
//     "birthLocation": "Crystal Lake, New Jersey",
//     "status": "dead",
//     "weaponChoice": ["axe", "pitchfork", "firepoker", "pickaxe", "machete", "ice pick", "spear gun", "screwdriver", "syringe", "rope", "hands", "liquid nitrogen", "hacksaw", "hedge shears"]

//   },
//   "freddy kruger": {
//       "age": 82,
//       "birthName": "frederick charles krueger",
//       "birthLocation": "Springwood, Ohio",
//       "status": "dead",
//       "weaponChoice": "bladed leather glove"
//   },
//   "michael myers": {
//       "age": 67,
//       "birthName": "michael audrey myers",
//       "birthLocation": "Haddonfields, Illinois",
//       "status": "dead",
//       "weaponChoice": ["chef knife", "phone cord", "hammer", 'hot water', "syringes", "hands"]
//   },
//   "unknown": {
//     "age": 0,
//     "birthName": "unknown",
//     "birthLocation": "unknown"
//   }
// }

// asking for the data
// app.get("/api/:name", (req, res) => {
//   const slasherName = req.params.name.toLowerCase();
//   // if slasherName exists within slasherIcons - give the json
//   slasherIcons[slasherName] ? res.json(slasherIcons[slasherName]) : res.json(slasherIcons["unknown"]);
// });