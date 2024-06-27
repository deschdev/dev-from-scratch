const MongoClient = require('mongodb').MongoClient;
const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const PORT = 8000;

//dot env and body parser
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));

const connectionString = `mongodb+srv://deschdev:${process.env.MONGOPASS}@slashercluster0.lqtxcg6.mongodb.net/?retryWrites=true&w=majority&appName=slasherCluster0`;

// ensuring we can use ejs views
app.set("view engine", "ejs");

// getting the index html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('iconic-slashers');

    const slasherCollection = db.collection("slashers");

    // CREATE(post) - slasher form
    app.post('/slashers', (req, res) => {
      slasherCollection
        .insertOne(req.body)
        .then(result => {
          res.redirect("/")
        })
        .catch(error => console.error(error));
    });

    // READ(get) the slashers
    app.get("/", (req, res) => {
      db.collection("slashers")
        .find()
        .toArray()
        .then(results => {
          res.render("index.ejs", { slashers: results });
        })
        .catch(error => console.error(error));
    });
})
.catch(error => console.error(error));

// what port our app is listening on
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





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