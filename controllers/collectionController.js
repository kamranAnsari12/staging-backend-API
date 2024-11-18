const mongoose = require('mongoose');

// List all collections
exports.getAllCollections = async (req, res) => {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        const collectionNames = collections.map((col) => col.name);
        res.json({ collections: collectionNames });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch collections' });
    }
};

// Fetch data from a specific collection
exports.getCollectionData = async (req, res) => {
    const { collectionName } = req.params;
    try {
        const collection = mongoose.connection.collection(collectionName);
        const data = await collection.find({}).toArray();
        res.json({ collection: collectionName, data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};



// const mongoose = require('mongoose');

// exports.getAllCollections = async (req, res) => {
//     try {
//         // Get all collections in the current database
//         const collections = await mongoose.connection.db.listCollections().toArray();

//         // Extract collection names
//         const collectionNames = collections.map((col) => col.name);

//         res.json({ collections: collectionNames });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Failed to fetch collections' });
//     }
// };
