const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const connection = require('./query/db')
const axdata = require('./axdata.js');
const twitchData = require('./twitchData')
const api = require('./config/twitch/url');
const { jingburgerData, jururuData, goseguData } = require('./twitchData');


app.use(cors());
app.use(bodyParser.json());
 

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
    // res.send('list of all to do');
    const TODO_QUERY = `SELECT * FROM todolist.todos`;
    connection.query(TODO_QUERY, (err, response) => {
        if(err) console.log(err)
        else res.send(response)
    });
});

app.post('/addTodo', (req, res) => {
    // console.log(req.body);
    const ADD_QUERY = `insert into todolist.todos (todo) values ('${req.body.toDo}')`;
    connection.query(ADD_QUERY, (err) => {
        if(err) console.log(err)
        else res.send('you can add todo')
    });
    
});

app.delete('/deleteTodo/:todoid', (req, res) => {
    const DELETE_QUERY = `DELETE FROM todolist.todos where (todoid=${req.params.todoid})`;
    connection.query(DELETE_QUERY, (err, res) => {
        if(err) console.log(err)
        // else res.send('todo has been deleted')
    });
});

app.listen(8000, () => {
    console.log("The server is running at the port 8000");
});