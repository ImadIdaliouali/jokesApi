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

    if (!joke) {
      return res.status(404).json({
        status: 'fail',
        message: 'No joke found',
      });
    }

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

    if (!joke) {
      return res.status(404).json({
        status: 'fail',
        message: 'No joke found',
      });
    }

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
    const joke = await Joke.findByIdAndDelete(req.params.id);

    if (!joke) {
      return res.status(404).json({
        status: 'fail',
        message: 'No joke found',
      });
    }

    res.status(204).json({
      status: 'success',
    });
  } catch (err) {
    console.error(err);
  }
};

const getRandomJoke = async (req, res) => {
  try {
    const { type } = req.params;
    const filter = type ? { type } : {};

    const count = await Joke.count(filter);
    const rand = Math.floor(Math.random() * count);

    const randomJoke = await Joke.findOne(filter).skip(rand).select('-_id');

    if (!randomJoke) {
      return res.status(404).json({
        status: 'fail',
        message: 'No joke found',
      });
    }

    res.status(200).json(randomJoke);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllJokes,
  getJoke,
  createJoke,
  updateJoke,
  deleteJoke,
  getRandomJoke,
};
