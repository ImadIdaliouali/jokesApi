require('dotenv').config();
const mongoose = require('mongoose');

const app = require('./app');

const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connection: Successful'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

app.listen(port, () => console.log(`Server listening on port ${port}`));
