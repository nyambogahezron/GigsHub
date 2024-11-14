const notFound = (req, res) =>
  res.status(404).send(`Route Not Found - ${req.originalUrl}`);

module.exports = notFound;
