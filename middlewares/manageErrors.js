function manageErrors(err, req, res, next) {
  res.status(err.code);
  res.json({
    status: "KO",
    error: err.message,
  });
}

module.exports = manageErrors;
