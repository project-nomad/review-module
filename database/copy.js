//how to run schema: \i /Users/kianna/Desktop/review-module/schema.sql
const pg = require('pg');
const connectionString = 'postgres://localhost:5432/project_nomad_reviews';

/*************************** CONNECT TO POSTGRES *****************************/
const client = new pg.Client(connectionString);

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('you have succeeded in seeding');
  }
});

const query = `COPY listings FROM '/Users/Kianna/Desktop/review-module/database/listing_sample.csv' DELIMITER ',' CSV HEADER`;
client.query(query, (err) => {
  if (err) {
    throw err;
  } else {
    console.log('listing');
  }
});

// COPY listings FROM './listing_sample.csv' WITH (FORMAT csv);
// console.time();
// const query = `COPY users (username,profile_pic_id) FROM '/Users/Kianna/Desktop/review-module/database/user_sample.csv' DELIMITER ',' CSV HEADER`;

// client.query(query, (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.timeEnd()
//   }
// });

client.end();

// COPY reviews FROM './user_sample.csv' WITH (FORMAT csv);