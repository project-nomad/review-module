const pg = require('pg');
const connectionString = 'postgres://localhost:5432/project_nomad_reviews';

const client = new pg.Client(connectionString);
client.connect((err) => {
  if (err) {
    console.log('you have error', err);
  } else {
    console.log('you have connected to postgresDB');
  }
});

/***************** CREATE (POST) *******************************/
var postOverview = (listing_id, ratings, callback) => {
  var query = `
    INSERT INTO reviews (rating_accuracy,
      rating_communication, rating_cleanliness,
      rating_location, rating_checkin,rating_value)
      VALUES (?, ?, ?, ?, ?)
    WHERE listing_id=${listing_id};
  `;


  client.query(query, [ratings.avg_accuracy, ratings.avg_communication, ratings.avg_cleaniness, ratings.avg_location, ratings.avg_checkin, ratings.avg_checkin, ratings.avg_value], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var postReviews = (listing_id, callback) => {
  var query = `
    INSERT INTO reviews (review_date, 
      username, review_body, response_date, host_username, profile_pic_id, response_body)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    WHERE listing_id=${listing_id};
  `;
  
  client.query( query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


/***************** READ (GET) *******************************/
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

  client.query(query, (err, results) => {
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
    (rating_accuracy + rating_communication + rating_cleanliness + rating_location + rating_checkin + rating_value) / 6 AS avg_rating, 
    review_date, users.username,review_body,response_date AS response_date, host.username AS host_username, host.profile_pic_id AS host_pic_url, 
    response_body FROM reviews JOIN users ON reviews.review_user_id=users.id JOIN users AS host ON reviews.response_owner_id=host.id 
    WHERE listing_id=${listingId};
  `;
  
  client.query( query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};




module.exports.postOverview = postOverview;
module.exports.postReviews = postReviews;
module.exports.getOverview = getOverview;
module.exports.getReviews = getReviews;