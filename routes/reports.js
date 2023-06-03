const express = require('express');
const Report = require('../models/report');

const router = express.Router();

// List all reports filtered by status
router.get('/:status', async (req, res) => {
  try {
    const { status } = req.params;
    const reports = await Report.find({ status }).sort({ date: 'asc' });
    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving reports' });
  }
});

module.exports = router;
