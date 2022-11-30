const db = require("../../utils/database");
module.exports = class V2 {
  constructor(table, query) {
    this.table = table;
    this.query = query;
  }
  GetData() {
    return db.execute(`select * from ${this.table}`);
  }
  Delete() {
    return db.execute(`DELETE FROM ${this.table} WHERE ${this.query}`);
  }
  PostData(obj) {
    let label = this.GetKeys("label", obj);
    let values = this.GetKeys("keys", obj);
    return db.execute(
      `insert into ${this.table} (${label}) values (${values})`
    );
  }
  GetKeys(type, obj) {
    let require_data;
    if (type == "label") require_data = Object.keys(obj).toString();
    else require_data = Object.values(obj).toString();
    return require_data;
  }
};
