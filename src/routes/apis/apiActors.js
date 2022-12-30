const express = require('express');
const router = express.Router();
const {list, detail, actorMovies, create, update, destroy} = require('../../controllers/apis/apiActorsController');

// Acceso por /api/actors

router
    .get('/',list)
    .get('/:id',detail)
    .get('/:id/movies',actorMovies)
    .post('/create',create)
    .put('/update/:id',update)
    .delete('/delete/:id',destroy)

module.exports = router;