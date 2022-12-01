const Auth = require("../../controllers/auth/basic");
const express = require("express");
const router = express.Router();

const v2calls = require("../../controllers/v2/home");
router.get("/:table_name", Auth.basicAuth, v2calls.Get);
router.post("/:table_name", Auth.basicAuth, v2calls.Put);
router.delete("/:table_name", Auth.basicAuth, v2calls.Delete);
router.put("/:table_name", Auth.basicAuth, v2calls.Get);

module.exports = router;
