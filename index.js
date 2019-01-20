//  Modules
const express = require('express');
//  Joi is a class, that's why it follows Pascal Case
const Joi = require('joi');
const path = require('path');
const fs = require('fs');

//  Routes
const login = require('./routes/login')
const upload = require('./routes/upload')

//  initialize an instance of express called app.
const app = express();

//  middleware -> functions have access to request and response object.
//  middleware is basically what express initializes prior to the requests.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/angular/dist/captionthis')));
app.use('/', login);
app.use('/', upload);

app.get('/contribute', (req, res) => {
    res.sendFile(path.join(__dirname, '/angular/dist/captionthis', 'index.html'));
    res.sendFile(path.join(__dirname, '/angular/images%20and%20logos', 'caption-this-logo.png'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/angular/dist/captionthis', 'index.html'));
});

app.get('/howitworks', (req, res) => {
    res.sendFile(path.join(__dirname, '/angular/dist/captionthis', 'index.html'));
});

app.get('/watchlectures', (req, res) => {
    res.sendFile(path.join(__dirname, '/angular/dist/captionthis', 'index.html'));
});

app.get('/uploadvids', (req, res) => {
    res.sendFile(path.join(__dirname, '/angular/dist/captionthis', 'index.html'));
});

app.get('/watchocob', (req, res) => {
    res.sendFile(path.join(__dirname, '/angular/dist/captionthis', 'index.html'));
});

/* Meat/Body of our index.js code will go here. */

//  PORT (acquires a dynamic port or use default 8010)
//  To set a port: LinuxTerminal (export PORT=____), Windows (set PORT=____)
const port = process.env.PORT || 8010;

app.listen(port, () => console.log(`Listening on port ${port}...`));