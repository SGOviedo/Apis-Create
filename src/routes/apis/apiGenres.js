const express = require('express');
const router = express.Router();
const {list, detail} = require('../../controllers/apis/apiGenresController');

// Acceso por /api/genres
router
    .get('/', list)
    .get('/:id', detail)


module.exports = router;