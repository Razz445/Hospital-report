
const express = require('express');
const Patient = require('../models/patient');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const patient = new Patient({ phoneNumber });
    await patient.save();
    res.status(201).json({ message: 'Patient registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering patient' });
  }
});

// Add more patient routes here

module.exports = router;
