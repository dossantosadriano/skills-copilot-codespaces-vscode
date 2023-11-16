// create web server with express
const express = require('express');
const app = express();
// create a port
const port = 3000;
// import the comments file
const comments = require('./comments');
// import the body-parser
const bodyParser = require('body-parser');
// import the cors
const cors = require('cors');
// use the body-parser
app.use(bodyParser.json());
// use the cors
app.use(cors());
// get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});
// get a comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found.');
    res.send(comment);
});
// post a comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        name: req.body.name,
        comment: req.body.comment
    };
    comments.push(comment);
    res.send(comment);
});
// update a comment
app.put('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found.');
    comment.name = req.body.name;
    comment.comment = req.body.comment;
    res.send(comment);
});
// delete a comment
app.delete('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    if (!comment) res.status(404).send('The comment with the given ID was not found.');
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.send(comment);
});
// listen to port
app.listen(port, () => console.log(`Listening on port ${port}...`));
