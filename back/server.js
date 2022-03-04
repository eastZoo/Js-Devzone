const request = require('request');
const express = require('express');
const app = express();
const cors = require('cors');
const axdata = require('./axdata.js');
const twitchData = require('./twitchData')
const api = require('./config/twitch/url');
const { jingburgerData, jururuData, goseguData } = require('./twitchData');
app.use(cors())

app.get('/', async(req, res) => {
    await axdata('성동구', (error, {airquality}={}) => {
        if (error) {
            res.send(error);
        }
        res.send(airquality);
    });
});

app.get('/jingburger', async(req, res) => {
    await jingburgerData((error,{chatter}={}) => { //twitchdata.js 의 callback안의 함수 chatter변수이름과 맞춰줘야함
        if (error) {
            res.send(error);
        }
        res.send(chatter);
    });
});

app.get('/jururu', async(req, res) => {
    await jururuData((error,{chatter}={}) => { //twitchdata.js 의 callback안의 함수 chatter변수이름과 맞춰줘야함
        if (error) {
            res.send(error);
        }
        res.send(chatter);
    });
});

app.get('/gosegu', async(req, res) => {
    await goseguData((error,{chatter}={}) => { //twitchdata.js 의 callback안의 함수 chatter변수이름과 맞춰줘야함
        if (error) {
            res.send(error);
        }
        res.send(chatter);
    });
});

app.get('/todos', (req, res) => {
    res.send('list of all todo');
});

app.post('/addTodo', (req, res) => {
    
    res.send('you can add todo');
});

app.get('/deleteTodo', (req, res) => {
    res.send('deleted Todo');
});

app.listen(8000, () => {
    console.log("The server is running at the port 8000");
});