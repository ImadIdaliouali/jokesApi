const express = require('express');

const jokeController = require('../controllers/jokeController');

const router = express.Router();

router.get('/random', jokeController.getRandomJoke);

router.get('/:type/random', jokeController.getRandomJoke);

router
  .route('/')
  .get(jokeController.getAllJokes)
  .post(jokeController.createJoke);

router
  .route('/:id')
  .get(jokeController.getJoke)
  .patch(jokeController.updateJoke)
  .delete(jokeController.deleteJoke);

module.exports = router;
