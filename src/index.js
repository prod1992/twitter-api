const express = require("express");
const Twit = require("twit");

const config = require("./config.json");

const client = new Twit(config);

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/twitter-api/1.1/statuses/home_timeline.json", (req, res, next) => {
  client.get("statuses/home_timeline", function(err, data, response) {
    res.send(data);
  });
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
