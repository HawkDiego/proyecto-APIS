const db = require("../../database/models");
const sequelize = db.sequelize;

const genresController = {
  list: (req, res) => {
    db.Genre.findAll()
      .then((genres) => {
        res.status(200).json({
          meta: {
            status: 200,
            total: genres.length,
            url: req.originalUrl,
          },
          data: genres,
        });
      })
      .catch((error) => {
        res.status(500).json({
          meta: {
            status: 200,
            total: genres.length,
            url: req.originalUrl,
          },
          error: JSON.stringify(error),
        });
      });
  },
  detail: (req, res) => {
    db.Genre.findByPk(req.params.id)
      .then((genre) => {
        res.status(200).json({
          meta: {
            status: 200,
            total: genre.length,
            url: req.originalUrl,
          },
          data: genre,
        });
      })
      .catch((error) => {
        res.status(500).json({
          meta: {
            status: 200,
            total: genres.length,
            url: req.originalUrl,
          },
          error: JSON.stringify(error),
        });
      });
  },
};

module.exports = genresController;
