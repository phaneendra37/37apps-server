const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/v2/home");
const app = express();
port = process.env.PORT || 3000;

//Internal Modules
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/v2", router);

app.use((req, res, next) => {
  res
    .status(200)
    .send("if you enter the URL manually,Try to adjust and correct it");
});
app.listen(port);
