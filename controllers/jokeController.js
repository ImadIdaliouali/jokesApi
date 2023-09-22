const Joke = require('../models/jokeModel');

const getAllJokes = (req, res) => res.status(200).send('Get All Jokes');

const getJoke = (req, res) => res.status(200).send('Get Joke');

const createJoke = (req, res) => res.status(200).send('Create Joke');

const updateJoke = (req, res) => res.status(200).send('Update Joke');

const deleteJoke = (req, res) => res.status(200).send('Delete Joke');

module.exports = { getAllJokes, getJoke, createJoke, updateJoke, deleteJoke };
