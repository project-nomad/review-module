-- How to run: mysql -u root < schema.sql

DROP DATABASE IF EXISTS project_nomad_reviews;

CREATE DATABASE project_nomad_reviews;

USE project_nomad_reviews;

CREATE TABLE listings (
  id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  profile_pic_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  listing_id INT NOT NULL,

  rating_accuracy INT NOT NULL DEFAULT 0,
  rating_communication INT NOT NULL DEFAULT 0,
  rating_cleanliness INT NOT NULL DEFAULT 0,
  rating_location INT NOT NULL DEFAULT 0,
  rating_checkin INT NOT NULL DEFAULT 0,
  rating_value INT NOT NULL DEFAULT 0,

  review_user_id INT NOT NULL,
  review_body TEXT NOT NULL,
  review_date DATE NOT NULL,

  response_date DATE DEFAULT NULL,
  response_owner_id INT DEFAULT NULL,
  response_body TEXT DEFAULT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (listing_id) REFERENCES listings(id),
  FOREIGN KEY (review_user_id) REFERENCES users(id),
  FOREIGN KEY (response_owner_id) REFERENCES users(id) 
);