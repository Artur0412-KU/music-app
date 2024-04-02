const express = require("express");
const router = express.Router();
const validateForm = require("../controllers/validateForm");
const pool = require('../db');
const bcrypt = require('bcrypt')

router.post("/login", async (req, res, next) => {
    validateForm(req, res, next);

    
    const potentialLogin = await pool.query(
        "SELECT id, username, passhash FROM users u WHERE u.username=$1",
        [req.body.username]
    );

    

    if (potentialLogin.rowCount > 0) {
        const isSamePass = await bcrypt.compare( 
          req.body.password, 
          potentialLogin.rows[0].passhash
        );

        if (isSamePass) {
            req.session.user = {
                username,
                id: newUserQuery.rows[0].id,
            }
        } else {
            console.log('Nope)')
            res.json({loggedIn: false, status: 'Wrong username or password!'})
        }
    } else {
        console.log('Nope)')
        res.json({loggedIn: false, status: 'Wrong username or password!'})
    }

    
});


router.post("/register", async (req, res, next) => {
    validateForm(req, res, next);

    const existingUser = await pool.query(
        "SELECT username form users WHERE username = $1",
        [req.body.username]
    )

    console.log(existingUser)

    if (existingUser.rowCount === 0) {
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        const newUserQuery = await pool.query(
            'INSERT INTO users(username, passhash) values($1, $2) RETURNING id, username',
            [req.body.username, hashedPass]
        );
        req.session.user = {
            username: req.body.username,
            id: newUserQuery.rows[0].id,
        }
        req.session.user = {hi: 'word'}
        res.json({loggedIn: true, username: req.body.username})
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

