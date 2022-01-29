const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    default:
      res.status(500).json(err.message);
      break;
  }
};

module.exports = errorHandler;
