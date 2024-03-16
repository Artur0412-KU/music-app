const express = require("express");
const router = express.Router();
const validateForm = require("../controllers/validateForm");

router.post("/login", (req, res, next) => {
    validateForm(req, res, next);
});


router.post("/registration", (req, res, next) => {
    validateForm(req, res, next);
});

module.exports = router;