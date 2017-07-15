const express = require('express');
const path = require('path');
const credential = require('credential')();

const router = express.Router();

const db = require('../elasticsearch');

router.get('/login', (req, res, next) => {
  return res.render('login');
});

router.post('/login', (req, res, next) => {
  const password = req.body.password;
  const username = req.body.username;

  db.get({
    index: 'users',
    type: 'document',
    id: username,
  })
    .then(x => credential.verify(x._source.password, password))
    .then(result => (result ? res.status(200) : res.stauts(401)).end())
    .catch(() => res.status(401).end());
});

module.exports = router;