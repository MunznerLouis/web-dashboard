const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const apiRoutes = require('./api'); // Import your API routes

// Configure CORS to allow requests from http://localhost:3000 (your React app's origin)
app.use(cors({ origin: 'http://localhost:3000' }));

// Use the API routes
app.use('/api', apiRoutes);
console.log(apiRoutes);
// Start the Express app
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
