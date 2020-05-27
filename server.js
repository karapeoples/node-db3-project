const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/schemes', SchemeRouter);

server.get('/', (req, res) => {
  res.status(200).json('Welcome to NODE DB 3 Project API with KP')
})

module.exports = server;