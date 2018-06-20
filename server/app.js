const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index');
const app = express();

// parses the incoming json data
app.use(bodyParser.json());

// resolves a specific listing requested
app.use('/', express.static(path.join(__dirname, '/../public')));
app.use('/listings/:id', express.static(path.join(__dirname, '/../public')));

// gets aggregate overview ratings
app.get('/listings/:listingId/overviews', (req, res) => {
  db.getOverview( req.params.listingId, (err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.status(200);
      res.send(data);
    }
  });
});

// gets all reviews
app.get('/listings/:listingId/reviews', (req, res) => {
  db.getReviews( req.params.listingId, (err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.status(200);
      res.send(data);
    }
  });
});

app.post('/listings/:id', (req, res) => {
  // db function that writes to the db
});

app.put('/listings/:id', (req, res) => {
  // db function that modifies an entry in the db
});

app.delete('/listings/:id', (req, res) => {
  // db function that deletes an entry in the db
});

module.exports = app;