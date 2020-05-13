const express = require('express');
const app = express();
const format = require('./moduleRequired');

const port = 8000;

// add a route, root directory, (req, res)
// and tell it what to respond with
app.get("/", (req, res) => res.send(format()));

// res to the client with 'legal terms'
app.get('/legal', (req, res) => {
    res.send(format('legal stuff'));
})

// res 
app.get('/about', (req, res) => {
    res.send(format('about page'));
})

app.get('/contact', (req, res) => {
    res.send(format('contat page'));
})

// creates the listener and tells it what to do
app.listen(port, () => console.log(`listening on port http://localhost:${port}`));