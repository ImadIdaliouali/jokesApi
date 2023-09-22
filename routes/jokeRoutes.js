const express = require('express');

const router = express.Router();

router
  .route('/')
  .get((req, res) => res.status(200).send('Get All Jokes'))
  .post((req, res) => res.status(200).send('Create Joke'));

router
  .route('/:id')
  .get((req, res) => res.status(200).send('Get Joke'))
  .patch((req, res) => res.status(200).send('Update Joke'))
  .delete((req, res) => res.status(200).send('Delete Joke'));

module.exports = router;
