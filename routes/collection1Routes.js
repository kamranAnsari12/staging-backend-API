const express = require('express');
const router = express.Router();
const collection1Controller = require('../controllers/collection1Controller');

// Route to fetch data from a specific collection in a specific database
router.get('/:dbName/:collectionName', collection1Controller.getCollectionData);

module.exports = router;
