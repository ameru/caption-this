//  Modules
const express = require('express');
const Joi = require('joi');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const router = express.Router();

let date = '';

const storage = multer.diskStorage({
    destination: './raw_videos/',
    filename: function(req, file, cb) {
        date = Date.now()
        cb(null, req.body.title + '-' + date + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
});

let videosAPI = fs.readFileSync('./raw_videos/videosDirectory.json', (err) => {
    if (err)
        return console.log(err);
});
let videos = JSON.parse(videosAPI);

router.get('/uploadvids', (req, res) => {
  res.sendFile(path.join(__dirname, '../angular/dist/captionthis', 'index.html'));
});

router.post('/uploadvids', upload.single('videoUpload'), (req, res) => {
    const videoData = {
        fileDir: "./raw_videos/" + req.body.title + '-' + date + ".mp4",
        title: req.body.title,
        add: req.body.add,
        Tags: req.body.Tags
    };
    videos.videos.push(videoData);
    fs.writeFile('./raw_videos/videosDirectory.json', JSON.stringify(videos, null, 2), (err, data) => {
        if (err)
           return res.send(err);
        console.log(`Successfully registered new video ${videoData.title}.`);
    });
    console.log('hi')
    res.redirect('/uploadvids')
});

router.get('/uploadvids/edits', (req,res) => {
    res.sendFile(path.join(__dirname, '/angular/dist/captionthis', 'index.html'));
});

router.get('/uploadvids/edits/:name', (req, res) => {
  res.sendFile(path.join(__dirname, '/angular/dist/captionthis', 'index.html'));
  res.sendFile(path.join(__dirname, '/raw_videos', req.params.name+'.mp4'));
});

module.exports = router