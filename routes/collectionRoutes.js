
const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collectionController');

// Route to list all databases
router.get('/databases', collectionController.getAllDatabases);

// Route to list all collections in a specific database
router.get('/:dbName/collections', collectionController.getAllCollectionsInDatabase);

module.exports = router;

//first changes 

// //const express = require('express');
// const router = express.Router();
// const collectionController = require('../controllers/collectionController');

// // Route to fetch all collections
// router.get('/', collectionController.getAllCollections);

// // Route to fetch data from a specific collection
// router.get('/:collectionName', collectionController.getCollectionData);

// module.exports = router;
