const asyncHandler = require("express-async-handler");
const { validationResult } = require("express-validator");

const Record = require("../models/recordModel");

// @desc    Get records
// @route   GET /api/records
// @access  Public
const getRecords = asyncHandler(async (req, res) => {
  const records = await Record.find();
  res.status(200).json(records);
});

// @desc    Set record
// @route   POST /api/records
// @access  Public
const setRecord = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error(errors.array()[0].msg);
    error.data = errors.array();
    error.statusCode = 422;
    throw error;
  }

  const { name, amount, address, status, role } = req.body;

  const record = await Record.create({
    address,
    amount,
    name,
    role,
    status,
  });
  res.status(200).json({ message: `Success`, record: record });
});

// @desc    Udpate record
// @route   PUT /api/record/:id
// @access  Public
const updateRecord = asyncHandler(async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error(errors.array()[0].msg);
    error.data = errors.array();
    error.statusCode = 422;
    throw error;
  }

  const record = await Record.findById(req.params.id);

  if (!record) {
    res.status(400);
    throw new Error("Record not found");
  }

  const updatedRecord = await Record.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({ message: `Success`, updatedRecord: updatedRecord });
});

module.exports = {
  getRecords,
  setRecord,
  updateRecord,
};
