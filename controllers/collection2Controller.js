const mongoose = require('mongoose');

/**
 * Fetch documents from a specific collection in a specific database based on a condition.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.queryCollectionWithCondition = async (req, res) => {
    const { dbName, collectionName } = req.params;
    const { field, value } = req.query; // Field and value for the query condition

    try {
        // Switch to the specific database
        const db = mongoose.connection.useDb(dbName);

        // Access the specified collection
        const collection = db.collection(collectionName);

        // Construct the query
        const query = {
            [field]: value, // Dynamically match field with value
        };

        // Fetch documents matching the condition
        const data = await collection.find(query).toArray();

        // Send success response
        res.status(200).json({
            success: true,
            collectionName,
            query,
            data,
        });
    } catch (error) {
        console.error(error);

        // Handle errors and send failure response
        res.status(500).json({
            success: false,
            message: 'Failed to fetch data based on condition',
            error: error.message,
        });
    }
};
