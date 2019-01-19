//  Modules
const express = require('express');
//  Joi is a class, that's why it follows Pascal Case
const Joi = require('joi');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.use(express.static(path.join(__dirname, '/public')));
router.use(express.static(path.join(__dirname, '/assets')));

let usersAPI = fs.readFileSync('./assets/user-data.json', (err) => {
    if (err)
        return console.log(err);
});
let usersData = JSON.parse(usersAPI);

router.use(express.static(path.join(__dirname, 'public')));

router.get("/assets/CalPolyLogoGreen.png", (req, res) => {
    res.sendFile(path.join(__dirname, '../assets', 'CalPolyLogoGreen.png'));
});

router.get("/assets/styles.css", (req, res) => {
    res.sendFile(path.join(__dirname, '../assets', 'styles.css'));    
})

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'login.html'));
    //let inputContent = req.body.textField;

});

router.post("/login", (req, res) => {
    const user = {
        name: req.body.name,
        age: req.body.password
    };

    usersData.users.push(user);
    fs.writeFile('./assets/user-data.json', JSON.stringify(usersData, null, 2), (err, data) => {
        if (err)
            return res.send(err);
        console.log(`Successfully registered new user ${user.name}.`);
    });

    res.redirect('/');
});

module.exports = router;