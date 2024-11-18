const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const collectionRoutes = require('./routes/collectionRoutes');

//for partucular Db and specific collections
const collection1Routes = require('./routes/collection1Routes');
//for particlar db and speific collection and query search
const collection2Routes = require('./routes/collection2Routes');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', collectionRoutes);

// Routes forspecific db and its particular collection
app.use('/api/collection1', collection1Routes);

//for particlar db and speific collection and query search
app.use('/api/collection2',collection2Routes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


///Db got connected but major issue rsised

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const connectDB = require('./config/db'); // Database connection
// const collectionRoutes = require('./routes/collectionRoutes'); // Dynamic collection routes

// require('dotenv').config(); // Load environment variables

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors()); // Enable Cross-Origin Resource Sharing
// app.use(bodyParser.json()); // Parse incoming JSON requests

// // Dynamic Collection Routes
// app.use('/api/collections', collectionRoutes);

// // Error Handling Middleware
// app.use((err, req, res, next) => {
//     console.error('Error:', err.stack || err);
//     res.status(err.status || 500).json({
//         error: err.message || 'Internal Server Error',
//     });
// });

// // Handle 404 Errors (Route Not Found)
// app.use((req, res) => {
//     res.status(404).json({ error: 'Route not found' });
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// module.exports = app; // Export app for testing or further use
