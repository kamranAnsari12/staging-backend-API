const express = require('express');
const router = express.Router();
const collection2Controller = require('../controllers/collection2Controller');

// Route to query a collection with a condition
router.get('/:dbName/:collectionName/query', collection2Controller.queryCollectionWithCondition);

module.exports = router;
