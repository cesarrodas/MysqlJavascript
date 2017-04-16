const express = require("express");
const bodyParser = require("body-parser");
const knex = require("knex");

const db = knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    database: "JavaScriptTest"
  }
})

express()
  .use(bodyParser.json())
  .get("/tweets", (req, res) => {
    db("tweets").then((tweets) => {
      res.send(tweets);
    })
  })
  .get("/users", (req, res) => {
    db("users").then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.send(err);
    })
  })
  .listen(3000)
