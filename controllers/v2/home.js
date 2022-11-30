const Model = require("../../models/v2/home");
//Get data from the table
module.exports.Get = async (req, res, next) => {
  const db = new Model(req.params.table_name);
  let response = await db.GetData();
  res.status(200).send(response[0]);
};
//Delete data from the table
module.exports.Delete = async (req, res, next) => {
  const db = new Model(req.params.table_name, `personID = 3`);
  let response = await db.Delete();
  res.status(200).send(response[0]);
};
module.exports.Put = async (req, res, next) => {
  const db = new Model(req.params.table_name, `personID = 2`);
  let response = await db.PostData({
    personID: 1,
    LastName: "vd",
    FirstName: "dv",
    address: "vd",
    city: "vd",
  });
  res.status(200).send(response[0]);
};
