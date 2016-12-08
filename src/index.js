const express = require('express'),
  bodyParser = require('body-parser'),
  config = require('../config.json');
  telegramEmitter = require('./telegram-emitter');

const app = new express();
const jsonParser = bodyParser.json();

app.get("/", (req,res) => {
  res.status(403).send("Sorry, this page only allows POST requests");
});

app.post("/", jsonParser, (req, res) => {
  if (!req.body || req.body.key !== config.hookKey) return res.sendStatus(400)
  telegramEmitter(config.telegramBotToken, config.telegramChatId, req.body);
  res.sendStatus(200);
});

app.listen(config.port, () => {
  console.log("The server is listen in port: " + config.port);
});
