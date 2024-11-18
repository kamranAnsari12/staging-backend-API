const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collectionController');

// Route to fetch all collections
router.get('/', collectionController.getAllCollections);

// Route to fetch data from a specific collection
router.get('/:collectionName', collectionController.getCollectionData);

module.exports = router;
