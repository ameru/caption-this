//  Modules
const express = require('express');
const Joi = require('joi');
const path = require('path');
const fs = require('fs');
const fileUpload = require('express-fileupload');

const router = express.Router();
//  initialize an instance of express called app.

router.use(fileUpload());

let videosAPI = fs.readFileSync('./raw_videos/videosDirectory.json', (err) => {
    if (err)
        return console.log(err);
});
let videos = JSON.parse(videosAPI);

router.post('/uploadvids', (req, res) => {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const videoData = {
        fileDir: "../../../raw_videos/" + req.body.Title + ".mp4",
        Title: req.body.Title,
        add: req.body.add,
        Tags: req.body.Tags
    };
    videos.videos.push(videoData);
    fs.writeFile('./raw_videos/videosDirectory.json', JSON.stringify(videos, null, 2), (err, data) => {
        if (err)
           return res.send(err);
        console.log(`Successfully registered new video ${videoData.Title}.`);
    });
    
    
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let video = req.files.video;
    
    // Use the mv() method to place the file somewhere on your server
    video.mv('/raw_videos', function(err) {
        if (err)
        return res.status(500).send(err);
      
        res.send('Video uploaded!');
    });

    res.redirect('/watchlectures');
});

router.get('/uploadvids/edits', (req,res) => {
    res.sendFile(path.join(__dirname, '/angular/dist/captionthis', 'index.html'));
});

router.get('/uploadvids/edits/:name', (req, res) => {
  res.sendFile(path.join(__dirname, '/angular/dist/captionthis', 'index.html'));
  res.sendFile(path.join(__dirname, '/raw_videos', req.params.name+'.mp4'));
});

module.exports = router