const { join } = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const { users } = require("./data.js");

const app = express();

app.use(bodyParser());

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});


app.get('/users', (req, res) => {
    // console.log(users);

    res.send(users);
});

app.post('/user', (req, res) => {
    const info = req.body.info;

    users.push(info);

    res.send(users);
});

app.listen(3000, () => console.log('port 3000'));
