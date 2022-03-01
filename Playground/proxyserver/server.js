const request = require('request');
const express = require('express');
const app = express();
const cors = require('cors');
const axdata = require('./axdata.js');
const twitchData = require('./twitchData')
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

app.get('/chatters', async(req, res) => {
    await twitchData((error,{chatter}={}) => { //twitchdata.js 의 callback안의 함수 chatter변수이름과 맞춰줘야함
        if (error) {
            res.send(error);
        }
        res.send(chatter);
    });
});

app.listen(8000, () => {
    console.log("The server is running at the port 8000");
});