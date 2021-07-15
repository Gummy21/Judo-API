const seedDb = require("./seed/seed");

const express = require("express"),
      app = express(),
      cors = require("cors");

require("dotenv").config();


db = require("./models/index");
db.moves = require("./models/moves");

Op = db.Sequelize.Op;
db.sequelize.sync({ logging: console.log});

// require("./seed/seed")
// seedDb()


const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 
}

app.use(cors())

app.get("/moves", function (req, res) {
  
  let category =  req.query.category;
  if(category == 0 ||category == undefined ||category == null){
    category = {[Op.like]:'%'}
  }
  const query = {
    name: {[Op.like]:`%${req.query.name}%`},
    category: category
  };

  
  db.moves
    .findAll({ where: query })
    .then((moves) => {
      
      res.send(moves);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(404)
        .json({
          msg: "Something went wrong when trying to select from the database",
          details: err,
        });
    });
});


app.get("/:id", function (req, res) {
  let id = req.params.id
  const condition = id ? {id: id}: null

  db.moves
    .findAll({ where: condition })
    .then((single) => {
      console.log(single);
      res.send(single);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(404)
        .json({
          msg: "Something went wrong when trying to select from the database",
          details: err,
        });
    });
});

app.listen(9000 || process.env.PORT, function () {
  console.log("Server started on port 9000");
});
