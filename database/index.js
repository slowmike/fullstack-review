const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {type: Number, unique: true},
  name: String,
  owner: {
    login: String,
  },
  html_url: String,
  forks: Number,
  watchers: Number,
  stargazers_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos, cb) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  Repo.insertMany(repos, (err) => {
    if(err) console.log(err);
    cb();
  });
}

let getByForks = (cb) => {
  Repo.find().sort({forks:-1}).limit(25).exec(cb);
}

module.exports.save = save;
module.exports.getByForks = getByForks;
