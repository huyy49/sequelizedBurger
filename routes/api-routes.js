// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the burgers
  app.get("/", function (req, res) {
    db.Burger.findAll({})
      .then(function (dbBurger) {
        // res.json(dbBurger);
        var hbsObject = {
          burgers: dbBurger
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
      });
  });

  // POST route for saving a new burger
  app.post("/api/burgers", function (req, res) {
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
    })
      .then(function (dbBurger) {
        res.json(dbBurger);
      });
  });

  // PUT route for updating burgers
  app.put("/api/burgers/:id", function (req, res) {
    db.Burger.update({
      devoured: req.body.devoured
    },
      {
        where: {
          id: req.params.id
        }
      })
      .then(function (dbBurger) {
        res.json(dbBurger);
      });
  });
};
