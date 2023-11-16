// Create web server
// Create a port
// Import the comments file
// Import the body-parser
// Import the cors
// Use the body-parser
// Use the cors
// Get all comments
// Get a comment by id
// Post a comment
// Update a comment
// Delete a comment
// Listen to port
// Path: comments.js
// create comments
const comments = [
    { id: 1, name: 'John', comment: 'Hello World' },
    { id: 2, name: 'Brad', comment: 'Hi' },
    { id: 3, name: 'Mary', comment: 'Good Morning' }
];
// export comments
module.exports = comments;
// Path: index.js
// Create web server
const express = require('express');
const app = express();
// Create a port
const port = 3000;
// Import the comments file
const comments = require('./comments');
// Import the body-parser
const bodyParser = require('body-parser');
// Import the cors
const cors = require('cors');
// Use the body-parser
app.use(bodyParser.json());
// Use the cors
app.use(cors());
// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});
// Get a comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found.');
    res.send(comment);
});
// Post a comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        name: req.body.name,
        comment: req.body.comment
    };
    comments.push(comment);
    res.send(comment);
});
// Update a comment
app.put('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found.');
    comment.name = req.body.name;
    comment.comment = req.body.comment;
    res.send(comment);
});
// Delete a comment
app.delete('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found.');
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.send(comment);
});
// Listen to port
app.listen(port, () => console.log(`Listening on port ${port}...`));
// Path: index.js
// Create web server
// Create a port
// Import the comments file
// Import the body-parser
// Import the cors
// Use the body-parser
// Use the cors
// Get all comments
// Get a comment by id
// Post a comment
// Update a comment
// Delete a comment
// Listen to port
// Path: index.js
// Create web server
// Create a port
// Import the comments file
// Import the body-parser
// Import the cors
// Use the body-parser
// Use the cors
// Get all comments
// Get a comment by id
// Post a comment
// Update a comment
// Delete a comment
// Listen to port
