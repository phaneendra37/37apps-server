module.exports.basicAuth = (req, res, next) => {
  let auth = req.headers && req.headers.withCredentials;
  if (auth != undefined || auth != false) {
    res.status(404).send("Request Unauthorized");
  } else next();
};
