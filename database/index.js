const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection(config);
connection.connect();

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

  connection.query( query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.getOverview = getOverview;
// module.exports.getReviews = getReviews;