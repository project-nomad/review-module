// How to run: node generator.js
const fs = require('fs');
// const csv = require('fast-csv');
const faker = require('faker');

/************************* USER TABLE DATA GENERATION ************************/
let users;
// let userId;
let profile_pic_id;
let userRows = [];

let userHeaders = "username, profile_pic_id\n";
fs.writeFileSync('user_sample.csv', userHeaders, 'utf8');

for (let i = 1; i <= 100000001; i++) {
  // userId = i;
  username = faker.name.firstName();
  profile_pic_id = i;

  users = [username, profile_pic_id];
  userRows.push(users);
 
  if (i % 5 === 0) {
    let chunck = userRows.join('\n') + '\n';
    fs.appendFileSync('user_sample.csv', chunck, 'utf8');
    userRows = [];
  }
}

/************************* LISTINGS DATA GENERATION ************************/
let listings;
let listingId;
let listingRows = [];

let listingHeaders = "id\n";
fs.writeFileSync('listing_sample.csv', listingHeaders, 'utf8');

for (let j = 1; j <= 10; j++) {
  listingId = j;
  listings = [listingId];

  listingRows.push(listings);

  if (j % 5 === 0) {
    let chunck = listingRows.join('\n') + '\n';
    fs.appendFileSync('listing_sample.csv', chunck, 'utf8');
    listingRows = [];
  }
}

/************************* REVIEWS DATA GENERATION ************************/
// let reviewId;
let reviewRows = [];
let reviews;

let rating_accuracy;
let rating_communication;
let rating_cleanliness;
let rating_location;
let rating_checkin;
let rating_value;
let review_user_id;
let review_body;
let review_date;
let response_date;
let response_owner_id;
let response_body;

let reviewHeaders = "listingId, rating_accuracy, rating_communication, rating_cleanliness, rating_location, rating_checkin, rating_value, review_user_id, review_body, review_date, response_date, response_owner_id, response_body\n"
// id, listing_id, 
fs.writeFileSync('reviews_sample.csv', reviewHeaders, 'utf8');

for (let j = 1; j <= 100000001; j++) {
  // let number = faker.random.number({min: 1, max: 3});
  // let sentences = faker.lorem.sentence();
  let date = faker.date.between('2018-01-01', '2018-12-31');
  
  // reviewId = j;
  // id = j;
  listingId = j;

  rating_accuracy = faker.random.number({min: 1, max: 3});;
  rating_communication = faker.random.number({min: 1, max: 3});;
  rating_cleanliness = faker.random.number({min: 1, max: 3});;
  rating_location = faker.random.number({min: 1, max: 3});;
  rating_checkin = faker.random.number({min: 1, max: 3});;
  rating_value = faker.random.number({min: 1, max: 3});;
  review_user_id = j;
  
  review_body = faker.lorem.sentence();
  review_date = date;
  response_date = date;
  response_owner_id = j;
  response_body = faker.lorem.sentence();

  reviews = [
    listingId, rating_accuracy, rating_communication, rating_cleanliness, 
    rating_location, rating_checkin, rating_value, review_user_id, review_body, review_date, response_date,
    response_owner_id, response_body
  ];

  // id, listingId, rating_accuracy, rating_communication, rating_cleanliness, 
  // rating_location, rating_checkin, rating_value, review_user_id, review_body, review_date, response_date,
  // response_owner_id, response_body

  reviewRows.push(reviews);

  if (j % 5 === 0) {
    let chunck = reviewRows.join('\n') + '\n';
    fs.appendFileSync('reviews_sample.csv', chunck, 'utf8');
    reviewRows = [];
  }
}

// (listing_id,rating_accuracy,rating_communication,rating_cleanliness,rating_location,rating_checkin,rating_value,review_user_id,review_body,review_date,response_date,response_owner_id,response_body)