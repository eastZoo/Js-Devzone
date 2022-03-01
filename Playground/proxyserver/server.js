const request = require('request');
const express = require('express');
const app = express();
const cors = require('cors');
const axdata = require('./axdata.js');
const api = require('./config/twitch/url');

app.use(cors())

app.get('/', async(req, res) => {
    await axdata('성동구', (error, {airquality}={}) => {
        if (error) {
            res.send(error);
        }
        res.send(airquality);
    });
});

app.get('/chatters', function(req, res, next){
    request(api.chatterUrl, function(error, response, body){
        if(error){
            console.log(error);
        }
        var obj = JSON.parse(body);
        console.log(obj.chatters.broadcaster);
    })
});

app.listen(8000, () => {
    console.log("The server is running at the port 8000");
});