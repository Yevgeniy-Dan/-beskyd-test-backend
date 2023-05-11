const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

const {
  getRecords,
  setRecord,
  updateRecord,
} = require("../controllers/recordController");

const validateFields = [
  body("name").trim().not().isEmpty().withMessage("Please add a name"),
  body("address").trim().not().isEmpty().withMessage("Please add an address"),
  body("role")
    .trim()
    .isIn(["Customer", "Business", "Admin"])
    .withMessage("Please select a role"),
  body("status")
    .trim()
    .isIn(["Open", "Close", "Pending"])
    .withMessage("Please select a status"),
  body("amount").isFloat({ min: 0 }).withMessage("Please add an amount"),
];

router.route("/").get(getRecords).post(validateFields, setRecord);

router.put("/:id", validateFields, updateRecord);

module.exports = router;
