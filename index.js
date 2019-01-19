//  Modules
const express = require('express');
//  Joi is a class, that's why it follows Pascal Case
const Joi = require('joi');
const path = require('path');
const fs = require('fs');

//  Routes
const login = require('./routes/login')

//  initialize an instance of express called app.
const app = express();

//  middleware -> functions have access to request and response object.
//  middleware is basically what express initializes prior to the requests.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', login);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

/* Meat/Body of our index.js code will go here. */

//  PORT (acquires a dynamic port or use default 8010)
//  To set a port: LinuxTerminal (export PORT=____), Windows (set PORT=____)
const port = process.env.PORT || 8010;

app.listen(port, () => console.log(`Listening on port ${port}...`));