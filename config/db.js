const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error('Database connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;



// // config/db.js
// const mongoose = require('mongoose');
// require('dotenv').config(); // Load environment variables

// const connectToDatabase = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB with Mongoose');
//   } catch (error) {
//     console.error('Failed to connect to MongoDB', error);
//     process.exit(1); // Exit process on failure
//   }
// };

// module.exports = connectToDatabase;
