const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctor');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const doctor = new Doctor({ username, password: hashedPassword });
    await doctor.save();
    res.status(201).json({ message: 'Doctor registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering doctor' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const doctor = await Doctor.findOne({ username });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    const isPasswordMatch = await bcrypt.compare(password, doctor.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ doctorId: doctor._id }, 'secretkey');
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
});

module.exports = router;
