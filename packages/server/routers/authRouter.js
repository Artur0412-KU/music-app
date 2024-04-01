const express = require("express");
const router = express.Router();
const validateForm = require("../controllers/validateForm");
const pool = require('../db');
const bcrypt = require('bcrypt')

router.post("/login", (req, res, next) => {
    validateForm(req, res, next);
});


router.post("/register", async (req, res, next) => {
    validateForm(req, res, next);

    const existingUser = await pool.query(
        "SELECT username form users WHERE username = $1",
        [req.body.username]
    )

    if (existingUser.rowCount === 0) {
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        const newUserQuery = await pool.query(
            'INSERT INTO users(username, passhash) values($1, $2) RETURNING username',
            [req.body.username, hashedPass]
        );
        res.json({loggedIn: true, username})
    } else {
        res.json({loggedIn: false, status: 'Username taken'})
    }
});

router.post("/forgot-password", (req, res, next) => {
    validateForm(req, res, next);
});

router.post("/new-password", (req, res, next) => {
    validateForm(req, res, next);
});

module.exports = router;