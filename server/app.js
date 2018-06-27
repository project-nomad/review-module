const express = require('express');
const path = require('path');
const db = require('../database/postgres/index');
const app = express();

// resolves a specific listing requested
app.use('/', express.static(path.join(__dirname, '/../public')));
app.use('/listings/:id', express.static(path.join(__dirname, '/../public')));

/************************  CREATE (POST) *************************/
app.post('/listings/:listingId/overviews/post', (req, res) => {
  db.postOverview( req.params.listingId, (err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.status(200);
      res.end();
    }
  });
});

app.post('/listings/:listingId/reviews/post', (req, res) => {
  db.postReviews( req.params.listingId, (err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.status(200);
      res.end);
    }
  });
});

/************************ READ (GET) *************************/
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

/************************ UPDATE (put) *************************/
app.put('/listings/:listingId/overviews', (req, res) => {
  db.putOverview( req.params.listingId, (err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.status(200);
      res.send(data);
    }
  });
});

app.put('/listings/:listingId/reviews', (req, res) => {
  db.putReviews( req.params.listingId, (err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      res.header('Access-Control-Allow-Origin', '*');
      res.status(200);
      res.send(data);
    }
  });
});

/************************ DELETE (delete) *************************/


module.exports = app;