
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
});

module.exports = mongoose.model('Patient', patientSchema);
