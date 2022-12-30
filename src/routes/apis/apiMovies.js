const express = require('express');
const router = express.Router();
const {list, detail, create, destroy} = require('../../controllers/apis/apiMoviesController');

// Accede por /api/movies

router
    .get('/', list)
    .get('/:id', detail)
    .post('/create', create)
    .delete('/delete/:id', destroy)

module.exports = router;