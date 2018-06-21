// How to run: node generator.js
const fs = require('fs');
const csv = require('fast-csv');
const faker = require('faker');
const parse = require('csv-parse');
const pg = require('pg');
const connectionString = 'postgres://localhost:5432/project_nomad_reviews1';

/*************************** CONNECT TO POSTGRES *****************************/
const client = new pg.Client(connectionString);

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('you have succeeded in seeding');
  }
});

/************************* USER TABLE DATA GENERATION ************************/
let users;
let userId;
let profile_pic_id;
let userRows = [];

userRows.push(['userId', 'username', 'profile_pic_id']);
for (let i = 1; i < 200; i++) {
  userId = i;
  username = faker.name.firstName();
  profile_pic_id = i;

  users = [userId, username, profile_pic_id];
  userRows.push(users);
}

const userSampleData = fs.createWriteStream('user_sample.csv');

csv.write(userRows).pipe(userSampleData);

// let line;

// rows.forEach((row) => {
//   line = row.join('\n');
//   return line;
// });


/************************* LISTINGS DATA GENERATION ************************/
let listings;
let listingId;
let listingRows = [];

listingRows.push(['id']);
for (let j = 1; j < 200; j++) {
  listingId = j;
  listings = [listingId];

  listingRows.push(listings);
}

const listingSampleData = fs.createWriteStream('listing_sample.csv');

csv.write(listingRows).pipe(listingSampleData);


/************************* REVIEWS DATA GENERATION ************************/
let reviewId;
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

for (let j = 1; j < 10000001; j++) {
  let number = faker.random.number({min: 1, max: 3});
  let sentences = faker.lorem.sentences();
  let date = faker.date.between('2018-01-01', '2018-12-31');

  reviewId = j;
  // reviews[listingId] = j;
  rating_accuracy = number;
  rating_communication = number;
  rating_cleanliness = number;
  rating_location = number;
  rating_checkin = number;
  rating_value = number;
  review_user_id = number;
  
  review_body = sentences;
  review_date = date;
  response_date = date;
  response_owner_id = j;
  response_body = sentences;
  
  reviews = [
    reviewId, rating_accuracy, rating_communication, rating_cleanliness, 
    rating_location, rating_checkin, rating_value, review_user_id, review_body, review_date, response_date,
    response_owner_id, response_body
  ];

  reviewRows.push(reviews);

  if (j % 100000 === 0) {
    let chunck = reviewRows.join('\n');
    fs.appendFileSync('reviews_sample.csv', chunck, 'utf8');
    chunck = [];
  }
}


// reviews['reviewId'] = j;
// // reviews[listingId] = j;
// reviews['rating_accuracy'] = number;
// reviews['rating_communication'] = number;
// reviews['rating_cleanliness'] = number;
// reviews['rating_location'] = number;
// reviews['rating_checkin'] = number;
// reviews['rating_value'] = number;
// reviews['review_user_id'] = number;

// reviews['review_body'] = sentences;
// reviews['review_date'] = date;
// reviews['response_date'] = date;
// reviews['response_owner_id'] = j;
// reviews['response_body'] = sentences;



// csv.write(reviewRows).pipe(reviewSampleData);
// const reviewsSampleData = fs.createWriteStream('reviews_sample.csv');
// let line;

// reviewRows.forEach((row, i) => {
//   line = row.join('\n');
  
//   console.log('this is line', line);
// });



// parse(listingsCSV, function(err, output) {
//   if (err) {
//     throw err;
//   } else {

//     for (var i = 1; i < output.length; i++) {
//       var id = parseInt(output[i][0]);
//       const query = `INSERT INTO listings (id) VALUES (${id});`;
//       client.query(query, (err) => {
//         if (err) {
//           throw err;
//         }
//       });
//     }
//   }
// });

// parse(reviewsCSV, function(err, output) {
//   if (err) {
//     throw err;
//   } else {

//     for (var i = 1; i < output.length; i++) {

//       const year = Math.floor(Math.random() * 5) + 2013; // random year
//       const month = Math.floor(Math.random() * 8) + 1; // random month
//       const date = Math.floor(Math.random() * 27) + 1; // random date

//       var id = parseInt(output[i][0]);
//       var listingID = parseInt(output[i][1]);
//       var ratingAccuracy = parseInt(output[i][2]);
//       var ratingComm = parseInt(output[i][3]);
//       var ratingClean = parseInt(output[i][4]);
//       var ratingLocation = parseInt(output[i][5]);
//       var ratingCheckin = parseInt(output[i][6]);
//       var reviewValue = parseInt(output[i][7]);
//       var reviewUserID = parseInt(output[i][8]);
//       var reviewBody = output[i][9];
//       var reviewDate = `${year}0${month}23`;
//       var responseDate = null;
//       var responseOwnerID = parseInt(output[i][12]);
//       var responseBody = '';

//       if (output[i][13].length === 4) {
//         responseBody = 'NULL';
//       } else {
//         responseBody = output[i][13];
//         responseDate = reviewDate;
//       }

//       var query = `INSERT INTO reviews (
//         id, listing_id, rating_accuracy, rating_communication, rating_cleanliness,
//         rating_location, rating_checkin, rating_value, review_user_id, review_body,
//         review_date, response_date, response_owner_id, response_body
//       ) 
//       VALUES (
//         ${id}, ${listingID}, ${ratingAccuracy}, ${ratingComm}, ${ratingClean},
//         ${ratingLocation}, ${ratingCheckin}, ${reviewValue}, ${reviewUserID}, '${reviewBody}', 
//         ${reviewDate}, ${responseDate}, ${responseOwnerID}, '${reviewBody}'
//       );`;

//       client.query(query, (err) => {
//         if (err) {
//           throw err;
//         }
//       });
//     }

//     // client.end(); // close connection after insertions are done
//   }
// });