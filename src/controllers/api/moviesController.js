const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;

const moviesController = {
  list: (req, res) => {
    Movies.findAll().then((movies) => {
      res
        .status(200)
        .json({
          meta: {
            status: 200,
            total: movies.length,
            url: req.orinalUrl,
          },
          data: movies,
        })
        .catch((e) => {
          res.status(500).json({
            meta: {
              status: 500,
            },
            error: JSON.stringify(e),
          });
        });
    });
  },
  create: (req, res) => {
    Movies.create(req.body)
      .then((movie) => {
        return res.status(200).json({
          data: movie,
        });
      })
      .catch((e) => {
        res.status(500).json({
          error: JSON.stringify(e),
        });
      });
  },
};

module.exports = moviesController;
