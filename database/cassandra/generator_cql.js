// How to run: node generator.js
const fs = require('fs');
const faker = require('faker');

/************************* REVIEWS DATA GENERATION ************************/
let reviewRows = [];
let reviews;

let username;
let host_username;
let profile_pic_id;
let reviews_id;
let listing_id;
let rating_accuracy;
let rating_communication;
let rating_cleanliness;
let rating_location;
let rating_checkin;
let rating_value;
let avg_rating;
let review_user_id;
let review_body;
let review_date;
let response_date;
let response_owner_id;
let response_body;
let reviewHeaders = 'reviews_id, listing_id, username, host_username, profile_pic_id, rating_accuracy, rating_communication, rating_cleanliness, rating_location, rating_checkin, rating_value, avg_rating, review_user_id, review_body, review_date, response_date, response_owner_id, response_body\n';

fs.writeFileSync('./sample_data_cql/reviews_sample.csv', reviewHeaders, 'utf8');

console.time('reviews table');
for (let j = 1; j <= 10000001; j++) {
  reviews_id = j;
  listing_id = faker.random.number({min: 1, max: 2000000});
  
  username = faker.name.firstName();
  host_username = faker.name.firstName();
  profile_pic_id = j;


  rating_accuracy = faker.random.number({min: 1, max: 5});
  rating_communication = faker.random.number({min: 1, max: 5});
  rating_cleanliness = faker.random.number({min: 1, max: 5});
  rating_location = faker.random.number({min: 1, max: 5});
  rating_checkin = faker.random.number({min: 1, max: 5});
  rating_value = faker.random.number({min: 1, max: 5});
  avg_rating = Math.round((rating_accuracy + rating_communication + rating_cleanliness 
    + rating_location + rating_checkin + rating_value) / 6);
  review_user_id = faker.random.number({min: 1, max: 2000000});
  
  review_body = faker.lorem.paragraph();
  review_date = faker.date.between('2015-01-01', '2015-12-31');
  response_date = faker.date.between('2015-01-01', '2015-12-31');
  response_owner_id = faker.random.number({min: 1, max: 2000000});
  response_body = faker.lorem.paragraph();

  reviews = [
    reviews_id, listing_id, username, host_username, profile_pic_id, rating_accuracy, rating_communication, rating_cleanliness, 
    rating_location, rating_checkin, rating_value, avg_rating, review_user_id, review_body, review_date, response_date,
    response_owner_id, response_body
  ];

  reviewRows.push(reviews);
  
  if (j % 100000 === 0) {
    let chunck = reviewRows.join('\n') + '\n';
    fs.appendFileSync('./sample_data_cql/reviews_sample.csv', chunck, 'utf8');
    reviewRows = [];
  }
}
console.timeEnd('reviews table');
