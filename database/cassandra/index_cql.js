// how to run schema: \i /Users/kianna/Desktop/review-module/schema.sql
// seed data to psql db
const cassandra = require('cassandra-driver');

/*************************** CONNECT TO POSTGRES *****************************/
const client = new cassandra.Client({contactPoints: ['127.0.0.1']});

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('you have connected to cqlDB');
  }
});

/**************************** REVIEWS DATA TO CQL ******************************/
console.time('reviews copy');
const query = `COPY reviews (profile_pic_id, listing_id_reviews, rating_accuracy, rating_communication, rating_cleanliness, rating_location, rating_checkin, rating_value, review_user_id, review_body, review_date, response_date, response_owner_id, response_body) FROM '/Users/Kianna/Desktop/review-module/database/cassandra/sample_data_cql/reviews_sample.csv' WITH HEADER=true;`
client.execute(query, (err) => {
  if (err) {
    throw err;
  } else {
    console.timeEnd('reviews copy');
  }
});
