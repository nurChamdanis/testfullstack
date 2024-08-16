const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('../db/db');
const router = express.Router();

router.get('/', async function (req, res, next) {
    try {
        const [rows] = await db.query("SELECT * FROM `orders`");
        res.status(200).json({ data: rows, count: rows.length, status: 200, msg: "" });
    } catch (err) {
        console.error('Error during authentication:', err);
        res.status(500).json({ data: [], count: 0, status: 400, msg: "" });
        // .send('Server error');
    }
});

module.exports = router;
