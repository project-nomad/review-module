// how to run schema: \i /Users/kianna/Desktop/review-module/schema.sql
// seed data to psql db
const pg = require('pg');
const connectionString = 'postgres://localhost:5432/project_nomad_reviews';

/*************************** CONNECT TO POSTGRES *****************************/
const client = new pg.Client(connectionString);

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('you have connected to postgresDB');
  }
});

/*************************** LISTINGS DATA TO PSQL *****************************/
console.time('listings copy')
const query = `COPY listings (id) FROM '/Users/Kianna/Desktop/review-module/database/listing_sample.csv' DELIMITER ',' CSV HEADER`;
client.query(query, (err) => {
  if (err) {
    throw err;
  } else {
    console.timeEnd('listings copy');
  }
});

/**************************** USERS DATA TO PSQL *******************************/
console.time('users copy');
const query2 = `COPY users (username,profile_pic_id) FROM '/Users/Kianna/Desktop/review-module/database/user_sample.csv' DELIMITER ',' CSV HEADER`;
client.query(query2, (err) => {
  if (err) {
    throw err;
  } else {
    console.timeEnd('users copy');
  }
});

/**************************** REVIEWS DATA TO PSQL ******************************/
console.time('reviews copy');
const query3 = `COPY reviews (listing_id,rating_accuracy,rating_communication,rating_cleanliness,rating_location,rating_checkin,rating_value,review_user_id,review_body,review_date,response_date,response_owner_id,response_body) FROM '/Users/Kianna/Desktop/review-module/database/reviews_sample.csv' DELIMITER ',' CSV HEADER`
client.query(query3, (err) => {
  if (err) {
    throw err;
  } else {
    console.timeEnd('reviews copy');
  }
});
