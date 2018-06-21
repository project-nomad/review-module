// const mysql = require('mysql');
// const config = require('./config');

const pg = require('pg');
const connectionString = 'postgres://localhost:5432/reviews';
// const connection = mysql.createConnection(config);
// connection.connect();

const client = new pg.Client(connectionString);
client.connect((err) => {
  if (err) {
    console.log('you have error', err);
  } else {
    console.log('you have success DB');
  }
});

var getOverview = (listingId, callback) => {
  var query = `
    SELECT 
      COUNT(listing_id) AS total_reviews,
      AVG(rating_accuracy) AS avg_accuracy,
      AVG(rating_communication) AS avg_communication,
      AVG(rating_cleanliness) AS avg_cleanliness,
      AVG(rating_location) AS avg_location,
      AVG(rating_checkin) AS avg_checkin,
      AVG(rating_value) AS avg_value
    FROM reviews
    WHERE listing_id = ${listingId}
  `;

  client.query( query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var getReviews = (listingId, callback) => {
  var query = `
    SELECT
      (rating_accuracy + rating_communication + rating_cleanliness 
        + rating_location + rating_checkin + rating_value) / 6 AS avg_rating,
      DATE_FORMAT(review_date, "%M %Y") AS review_date,
      user.username AS review_username,
      CONCAT("https://s3.us-east-2.amazonaws.com/hrsf96reviewmodule/", 
        user.profile_pic_id, ".jpg") 
        AS user_pic_url,
      review_body,
      DATE_FORMAT(response_date, "%M %Y") AS response_date,
      host.username AS host_username,
      CONCAT("https://s3.us-east-2.amazonaws.com/hrsf96reviewmodule/", 
        host.profile_pic_id, ".jpg") 
        AS host_pic_url,
      response_body
    FROM reviews
    JOIN users AS user
      ON reviews.review_user_id=user.id
    JOIN users AS host
      ON reviews.response_owner_id=host.id
    WHERE listing_id = ${listingId}
  `;
  
  client.query( query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.getOverview = getOverview;
module.exports.getReviews = getReviews;