const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const { initializeBarang } = require('../migrations/seed');

/* GET home page. */
router.get('/', async function (req, res, next) { 
  try {
    await initializeBarang(); // Call the createTable function
    res.send('Server side initial all table successfully!');
    // res.render('index', { title: 'Server side initial success !' });
  } catch (error) {
    console.error('Error during table creation:', error);
    res.status(500).send('Error creating table.');
  }
});

module.exports = router;
