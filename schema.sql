-- How to run (in psql): \i /Users/kianna/Desktop/review-module/schema.sql

DROP DATABASE IF EXISTS project_nomad_reviews1;

CREATE DATABASE project_nomad_reviews1;

\c project_nomad_reviews1;

CREATE TABLE listings (
  id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id SERIAL,
  username VARCHAR(50) NOT NULL,
  profile_pic_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id SERIAL,
  listing_id INT NOT NULL,

  rating_accuracy INT DEFAULT 0,
  rating_communication INT DEFAULT 0,
  rating_cleanliness INT DEFAULT 0,
  rating_location INT DEFAULT 0,
  rating_checkin INT DEFAULT 0,
  rating_value INT DEFAULT 0,

  review_user_id INT NOT NULL,
  review_body TEXT,
  review_date DATE NOT NULL,

  response_date DATE DEFAULT NULL,
  response_owner_id INT DEFAULT NULL,
  response_body TEXT,

  PRIMARY KEY (id),
  FOREIGN KEY (listing_id) REFERENCES listings(id),
  FOREIGN KEY (review_user_id) REFERENCES users(id),
  FOREIGN KEY (response_owner_id) REFERENCES users(id) 
);