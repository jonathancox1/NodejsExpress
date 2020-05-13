const data = require('./data');
const express = require('express');
const app = express();
const port = 8000;


// routes to respond with specific info
app.get('/cat', (req, res) => res.send(data.filter(animal => animal.type == "cat")));
app.get('/dog', (req, res) => res.send(data.filter(animal => animal.type == "dog")));

// get specific id of the data
app.get('/type/:type', (req, res) => res.send(data.filter(animal => animal.type == req.params.type)))

// use query strings to find specific information
app.get('/', (req, res) => {
    let age = req.query.age;
    let color = req.query.color;
    let animalArray = [];
    if (age) {
        animalArray = data.filter(animal => animal.age == age)
    }
    // filter from a which is the already widdled down array
    if (color) {
        animalArray = animalArray.filter(animal => animal.color == color);
    }

    res.send(animalArray);
})

// responds with json data
// least specific response at the bottom
app.get("/", (res, req) => res.json(data));


// creates the listener and tells it what to do
app.listen(port, () => console.log(`listening on port http://localhost:${port}`));