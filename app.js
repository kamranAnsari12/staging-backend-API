const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db'); // Database connection
const collectionRoutes = require('./routes/collectionRoutes'); // Dynamic collection routes

require('dotenv').config(); // Load environment variables

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse incoming JSON requests

// Dynamic Collection Routes
app.use('/api/collections', collectionRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack || err);
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
    });
});

// Handle 404 Errors (Route Not Found)
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export app for testing or further use
