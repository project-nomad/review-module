-- How to run (in psql): \i /Users/kianna/Desktop/review-module/schema.sql

DROP DATABASE IF EXISTS project_nomad_reviews;

CREATE DATABASE project_nomad_reviews;

\c project_nomad_reviews;

CREATE TABLE listings (
  id SERIAL PRIMARY KEY
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  profile_pic_id INT NOT NULL
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  listing_id INT NOT NULL,

  rating_accuracy INT DEFAULT 0,
  rating_communication INT DEFAULT 0,
  rating_cleanliness INT DEFAULT 0,
  rating_location INT DEFAULT 0,
  rating_checkin INT DEFAULT 0,
  rating_value INT DEFAULT 0,

  review_user_id INT NOT NULL,
  review_body TEXT,
  review_date TEXT,

  response_date TEXT,
  response_owner_id INT DEFAULT NULL,
  response_body TEXT,

  FOREIGN KEY (listing_id) REFERENCES listings(id),
  FOREIGN KEY (review_user_id) REFERENCES users(id),
  FOREIGN KEY (response_owner_id) REFERENCES users(id) 
);



