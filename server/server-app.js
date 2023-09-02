// app.js
const express = require('express');
const app = express();
const apiRoutes = require('./api'); // Import your API routes

// Use the API routes
app.use('/api', apiRoutes);

// Start the Express app
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
