//  Modules
const express = require('express');
//  Joi is a class, that's why it follows Pascal Case
const Joi = require('joi');
const path = require('path');
const fs = require('fs');

const router = express.Router();
//  initialize an instance of express called app.
const app = express();

module.exports = router