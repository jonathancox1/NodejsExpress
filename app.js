const express = require('express');
const app = express();
const format = require('./moduleRequired');

const port = 8000;

// add a route, root directory, (req, res)
// and tell it what to respond with
app.get("/", (req, res) => res.send(format()));

// res to the client with 'legal terms'
// when browser is navigated to root/legal
app.get('/legal', (req, res) => {
    res.send(format('legal stuff'));
})

// a more specific route with required params
// passes string at page to the req.params.page
app.get('/legal/:page', (req, res) => res.send(format(req.params.page)));



app.get('/about', (req, res) => {
    res.send(format('about page'));
})

app.get('/contact', (req, res) => {
    res.send(format('contat page'));
})

// creates the listener and tells it what to do
app.listen(port, () => console.log(`listening on port http://localhost:${port}`));