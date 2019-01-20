//  Modules
const express = require('express');
const Joi = require('joi');
const path = require('path');
const fs = require('fs');
const upload = require('express-fileupload');

const router = express.Router();
router.use(upload()); // configure middleware

router.get('/uploadvids', (req, res) => {
    res.sendFile(path.join(__dirname, '../angular/dist/captionthis', 'index.html'));
});

let videosAPI = fs.readFileSync('./raw_videos/videosDirectory.json', (err) => {
    if (err)
        return console.log(err);
});
let videos = JSON.parse(videosAPI);

router.post('/uploadvids', (req, res) => {
    console.log(req.body.title);
    /*
    console.log(req.files.video);
    if(req.files.video){
      var file = req.files.video,
        name = file.name,
        type = file.mimetype;
      var uploadpath = __dirname + '/raw_videos/' + name;
      file.mv(uploadpath,function(err){
        if(err){
          console.log("File Upload Failed",name,err);
          res.send("Error Occured!")
        }
        else {
          console.log("File Uploaded",name);
          res.send('Done! Uploading files')
        }
      });
    }
    else {
      res.send("No File selected !");
      res.end();
    };
    */
    const videoData = {
        fileDir: "../../../raw_videos/" + req.body.title + ".mp4",
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
    
    res.json(videoData);
});

router.get('/uploadvids/edits', (req,res) => {
    res.sendFile(path.join(__dirname, '/angular/dist/captionthis', 'index.html'));
});

router.get('/uploadvids/edits/:name', (req, res) => {
  res.sendFile(path.join(__dirname, '/angular/dist/captionthis', 'index.html'));
  res.sendFile(path.join(__dirname, '/raw_videos', req.params.name+'.mp4'));
});

module.exports = router