const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const doctorsRouter = require('./routes/doctors');
const patientsRouter = require('./routes/patients');
const reportsRouter = require('./routes/reports');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/hospital', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/doctors', doctorsRouter);
app.use('/patients', patientsRouter);
app.use('/reports', reportsRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
