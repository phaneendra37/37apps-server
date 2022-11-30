const express = require("express");
const app = express();
port = process.env.PORT || 3000;

app.use("", (req, res, next) => {
  res
    .status(200)
    .send("if you enter the URL manually,Try to adjust and correct it");
});
app.listen(port);
