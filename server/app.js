const express = require('express');
const path = require('path');
const db = require('../database/index');
const app = express();

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

app.post();

app.put();

app.delete();

module.exports = app;