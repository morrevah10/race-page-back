const express = require('express');
const router = express.Router();
const User = require('./user.model');

router.post('/registration', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while registering the user.' });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving users.' });
  }
});

// router.get('/users/:filter', async (req, res) => {
//   try {
//     const filter = req.params.filter;
//     const users = await User.find({ firstName: filter }); // Example: Filter by firstName
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred while retrieving users.' });
//   }
// });

module.exports = router;




// const express = require('express');
// const router = express.Router();
// const User = require('./user.model');

// router.post('/registration', async (req, res) => {
//   try {
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred while registering the user.' });
//   }
// });

// module.exports = router;