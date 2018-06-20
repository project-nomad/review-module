// How to run: node generator.js
const fs = require('fs');
const parse = require('csv-parse');
const pg = require('pg');
const connectionString = 'postgres://localhost:5432/project_nomad_reviews';

const client = new pg.Client(connectionString);

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('you have succeeded in seeding')
  }
});

var listingsCSV = fs.readFileSync('../sample_data/listings.csv');
var reviewsCSV = fs.readFileSync('../sample_data/reviews.csv');
var usersCSV = fs.readFileSync('../sample_data/users.csv');
parse(usersCSV, function(err, output) {
  if (err) {
    throw err;
  } else {

    for (var i = 1; i < output.length; i++) {

      var id = parseInt(output[i][0]);
      var username = output[i][1];
      var picID = parseInt(output[i][2]);

      const query = `INSERT INTO users (id, username, profile_pic_id) 
        VALUES (${id}, '${username}', ${picID});`;

      client.query(query, (err) => {
        if (err) {
          throw err;
        }
      });
    }
  }
});

parse(listingsCSV, function(err, output) {
  if (err) {
    throw err;
  } else {

    for (var i = 1; i < output.length; i++) {
      var id = parseInt(output[i][0]);
      const query = `INSERT INTO listings (id) VALUES (${id});`;
      client.query(query, (err) => {
        if (err) {
          throw err;
        }
      });
    }
  }
});

parse(reviewsCSV, function(err, output) {
  if (err) {
    throw err;
  } else {

    for (var i = 1; i < output.length; i++) {

      const year = Math.floor(Math.random() * 5) + 2013; // random year
      const month = Math.floor(Math.random() * 8) + 1; // random month
      const date = Math.floor(Math.random() * 27) + 1; // random date

      var id = parseInt(output[i][0]);
      var listingID = parseInt(output[i][1]);
      var ratingAccuracy = parseInt(output[i][2]);
      var ratingComm = parseInt(output[i][3]);
      var ratingClean = parseInt(output[i][4]);
      var ratingLocation = parseInt(output[i][5]);
      var ratingCheckin = parseInt(output[i][6]);
      var reviewValue = parseInt(output[i][7]);
      var reviewUserID = parseInt(output[i][8]);
      var reviewBody = output[i][9];
      var reviewDate = `${year}0${month}23`;
      var responseDate = null;
      var responseOwnerID = parseInt(output[i][12]);
      var responseBody = '';

      if (output[i][13].length === 4) {
        responseBody = 'NULL';
      } else {
        responseBody = output[i][13];
        responseDate = reviewDate;
      }

      var query = `INSERT INTO reviews (
        id, listing_id, rating_accuracy, rating_communication, rating_cleanliness,
        rating_location, rating_checkin, rating_value, review_user_id, review_body,
        review_date, response_date, response_owner_id, response_body
      ) 
      VALUES (
        ${id}, ${listingID}, ${ratingAccuracy}, ${ratingComm}, ${ratingClean},
        ${ratingLocation}, ${ratingCheckin}, ${reviewValue}, ${reviewUserID}, '${reviewBody}', 
        ${reviewDate}, ${responseDate}, ${responseOwnerID}, '${reviewBody}'
      );`;

      client.query(query, (err) => {
        if (err) {
          throw err;
        }
      });
    }

    // client.end(); // close connection after insertions are done
  }
});