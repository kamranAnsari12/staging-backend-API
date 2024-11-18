const mongoose = require('mongoose');

/**
 * Fetch data from a specific collection in a specific database.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.getCollectionData = async (req, res) => {
    const { dbName, collectionName } = req.params;

    try {
        // Switch to the specific database
        const db = mongoose.connection.useDb(dbName);

        // Access the specified collection
        const collection = db.collection(collectionName);

        // Fetch all documents from the collection
        const data = await collection.find({}).toArray();

        // Send success response
        res.status(200).json({
            success: true,
            collectionName,
            data,
        });
    } catch (error) {
        console.error(error);
        // Handle errors and send failure response
        res.status(500).json({
            success: false,
            message: 'Failed to fetch collection data',
            error: error.message,
        });
    }
};
