const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  type: {
    type: String,
    default: 'general',
    trim: true,
  },
  setup: {
    type: String,
    required: [true, 'A joke must have a setup'],
    trim: true,
  },
  punchline: {
    type: String,
    required: [true, 'A joke must have a punchline'],
    trim: true,
  },
});

const Joke = mongoose.model('Joke', jokeSchema);

module.exports = Joke;
