# Hospital API

This is a Node.js API for managing doctors, patients, and reports in a hospital setting. The API allows doctors to register, log in, register patients, create patient reports, and retrieve patient reports. It also provides endpoints to retrieve reports based on their status.

## Tech Stack

- Node.js
- MongoDB
- Express
- Mongoose
- Body-parser
- JSON Web Token (JWT)
- Bcrypt

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed on your machine or a remote MongoDB connection URL

### Installation

1. Clone the repository:
   git clone <repository_url>

2. Install the dependencies:
   npm install

3. Update the MongoDB connection URL in `app.js` file:
   mongoose.connect('<mongodb_connection_url>', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   });

4. Start the server:
   npm start

The server will start running on http://localhost:3000.

## API Documentation

### Doctors

- `POST /doctors/register` - Register a new doctor.
- `POST /doctors/login` - Log in as a doctor.

### Patients

- `POST /patients/register` - Register a new patient.
- `POST /patients/:id/create_report` - Create a report for a patient.
- `GET /patients/:id/all_reports` - List all reports of a patient.

### Reports

- `GET /reports/:status` - List all reports filtered by status.

## Authentication

Some routes are protected and require authentication. To access protected routes, include a JWT token in the `Authorization` header of the request.

## Contributing

Contributions are welcome! If you find any issues or want to contribute to the project, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
  
