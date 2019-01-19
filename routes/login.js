//  Modules
const express = require('express');
//  Joi is a class, that's why it follows Pascal Case
const Joi = require('joi');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.use(express.static(path.join(__dirname, '/public')));
router.use(express.static(path.join(__dirname, '/assets')));

router.get("/assets/CalPolyLogoGreen.png", (req, res) => {
    res.sendFile(path.join(__dirname, '../assets', 'CalPolyLogoGreen.png'));
});

router.get("/assets/styles.css", (req, res) => {
    res.sendFile(path.join(__dirname, '../assets', 'styles.css'));    
})

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'login.html'));
});

router.post("/login", (req, res) => {
    res.redirect('/');
});

module.exports = router;