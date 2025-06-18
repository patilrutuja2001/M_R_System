// middleware/parseBody.js
const express = require('express');

function parseBody(app) {
  app.use(express.json()); 
  app.use(express.urlencoded({ extended: true }))
}

module.exports = parseBody;
