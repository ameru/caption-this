//  Modules
const express = require('express');
const Joi = require('joi');
const path = require('path');
const fs = require('fs');
const fileUpload = require('express-fileupload');

const router = express.Router();
//  initialize an instance of express called app.

router.use(fileUpload());

router.post('/uploadvids', function(req, res) {
    if (Object.keys(req.files).length == 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let pic = req.files.pic;
  
    // Use the mv() method to place the file somewhere on your server
    pic.mv('/raw_videos', function(err) {
      if (err)
        return res.status(500).send(err);
  
      res.send('File uploaded!');
    });
  });








module.exports = router