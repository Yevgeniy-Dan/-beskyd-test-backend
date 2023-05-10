const asyncHandler = require("express-async-handler");

// @desc    Get records
// @route   GET /api/records
// @access  Public
const getRecords = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Records" });
});

// @desc    Set record
// @route   POST /api/records
// @access  Public
const setRecord = asyncHandler(async (req, res) => {
  const { name, amount } = req.body;
  res.status(200).json({ message: `Set Record ${name} => ${amount}` });
});

// @desc    Udpate record
// @route   PUT /api/record/:id
// @access  Public
const updateRecord = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Records ${req.params.id}` });
});

module.exports = {
  getRecords,
  setRecord,
  updateRecord,
};
