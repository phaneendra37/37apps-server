const express = require("express");
const router = express.Router();

const v2calls = require("../../controllers/v2/home");

router.get("/:table_name", v2calls.Put);
router.post("/:table_name", v2calls.Get);
router.delete("/:table_name", v2calls.Get);
router.put("/:table_name", v2calls.Get);

module.exports = router;
