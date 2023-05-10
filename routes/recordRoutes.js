const express = require("express");
const router = express.Router();

const {
  getRecords,
  setRecord,
  updateRecord,
} = require("../controllers/recordController");

router.route("/").get(getRecords).post(setRecord);

router.put("/:id", updateRecord);

module.exports = router;
