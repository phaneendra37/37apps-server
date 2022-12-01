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
      `insert into ${this.table} (${label}) values (${JSON.stringify(
        values
      ).replace(/[[\]]/g, "")})`
    );
  }
  GetKeys(type, obj) {
    if (type == "label") {
      let require_data;
      require_data = Object.keys(obj).toString();
      return require_data;
    } else {
      let key_values = [];
      for (var k_value in obj) {
        let val = obj[k_value];
        key_values.push(val);
      }
      return key_values;
    }
  }
};
