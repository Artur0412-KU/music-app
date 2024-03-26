const express = require("express");
const router = express.Router();
const validateForm = require("../controllers/validateForm");

router.post("/login", (req, res, next) => {
    validateForm(req, res, next);
});


router.post("/register", (req, res, next) => {
    validateForm(req, res, next);
});

router.post("/forgot-password", (req, res, next) => {
    validateForm(req, res, next);
});

router.post("/new-password", (req, res, next) => {
    validateForm(req, res, next);
});

module.exports = router;