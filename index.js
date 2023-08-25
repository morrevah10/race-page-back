const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./user.routes');

const app = express();
app.use(cors());
app.use(express.json());

const dbUrl = 'mongodb+srv://morrevah10:mor27195@cluster0.vew0dil.mongodb.net/users';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use('/', userRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
