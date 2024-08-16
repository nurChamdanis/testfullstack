// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../db/db');  // Import the database connection
require('dotenv').config(); // Load environment variables

const router = express.Router();

function generateToken(user) {
    return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

router.get('/', async function (req, res, next) { 
  res.render('index', { title: 'NOT AUTHORIZED' });
});



router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    // console.log(req); 
    try{ 
        const [rows] = await db.query('insert into Users (username, password) values (?, ?)', [username, password]);
        const [user] = await db.query('select * from Users where username=? and password=?', [username, password]);
        res.json({ data: rows, user: user, status: 200 }); 
    } catch (err) {
        console.error('Error during authentication:', err);
        res.status(500).send('Server error'); 
    }
});

router.post('/token', async (req, res) => {
    
    const { username, password } = req.body;
    
    try {
        const [rows] = await db.query('SELECT * FROM Users '+
            'WHERE username = ? and password = ?', [username, password]); 
        
        if (rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials or User is not our database' });
        } else{
            const user = rows[0]; 
            const token = generateToken(user);
            res.json({ token, user: user, status: 200 }); 
        }

    } catch (err) {
        console.error('Error during authentication:', err);
        res.status(500).send('Server error');
    }
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

router.get('/protected', authenticateToken, (req, res) => {
    res.send('This is a protected route, accessible only with a valid token.');
});

module.exports = router;
