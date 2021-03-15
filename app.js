const express = require("express"),
      app = express(),
      cors = require("cors");

require("dotenv").config();

db = require("./models/index");
db.moves = require("./models/moves");

Op = db.Sequelize.Op;

db.sequelize.sync({ logging: console.log });

app.get("/moves", function (req, res) {
  
  const query = {
    name: req.query.name,
    category: req.query.category || {[Op.like]:'%'}
  };

  db.moves
    .findAll({ where: query })
    .then((moves) => {
      console.log(moves);
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
  let id = requ.params.id
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

app.listen(8887, function () {
  console.log("Server started on port 8887");
});
