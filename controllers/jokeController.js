const Joke = require('../models/jokeModel');

const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();

    res.status(200).json({
      status: 'success',
      results: jokes.length,
      data: {
        jokes,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

const getJoke = async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        joke,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

const createJoke = async (req, res) => {
  try {
    const { type, setup, punchline } = req.body;
    const joke = await Joke.create({ type, setup, punchline });

    res.status(201).json({
      status: 'success',
      data: {
        joke,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

const updateJoke = async (req, res) => {
  try {
    const joke = await Joke.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        joke,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

const deleteJoke = async (req, res) => {
  try {
    await Joke.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
    });
  } catch (err) {
    console.error(err);
  }
};

const getRandomJoke = (req, res) => res.status(200).send('Get A Random Joke');

const getRandomJokeByType = (req, res) =>
  res.status(200).send('Get A Random Joke by type');

module.exports = {
  getAllJokes,
  getJoke,
  createJoke,
  updateJoke,
  deleteJoke,
  getRandomJoke,
  getRandomJokeByType,
};
