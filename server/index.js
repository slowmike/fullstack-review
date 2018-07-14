const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const getRepos = require('../helpers/github.js').getReposByUsername;
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.text());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  getRepos(req.body, (repos) => {
    db.save(repos, () => {
      res.status(201).send('Post Success!');
    });
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.getByForks((err, data) => {
    if(err) console.log(err);
    console.log(data);
    res.status(200).send(data);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
