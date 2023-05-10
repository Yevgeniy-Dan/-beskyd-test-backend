const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

const {
  getRecords,
  setRecord,
  updateRecord,
} = require("../controllers/recordController");

router
  .route("/")
  .get(getRecords)
  .post(setRecord, [
    body("name").trim().not().isEmpty(),
    body("address").trim().not().isEmpty(),
    body("role").trim().isIn(["Customer", "Business", "Admin"]),
    body("status").trim().isIn(["Open", "Close", "Pending"]),
    body("amount").isFloat({ min: 0 }),
  ]);

router.put("/:id", updateRecord);

module.exports = router;
