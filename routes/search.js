const express = require('express');
const router = express.Router();

const searchController = require('../controllers/SearchController');

router.get('/' , searchController.index);
router.get('/hi-hi' , searchController.hihi );

module.exports = router;