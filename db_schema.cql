DROP KEYSPACE IF EXISTS project_nomad_reviews;

CREATE KEYSPACE project_nomad_reviews WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE project_nomad_reviews;

CREATE TABLE reviews (
  reviews_id INT,
  listing_id INT,

  username TEXT,
  host_username TEXT,
  profile_pic_id INT,
  rating_accuracy INT,
  rating_communication INT,
  rating_cleanliness INT,
  rating_location INT,
  rating_checkin INT,
  rating_value INT,
  avg_rating INT,

  review_user_id INT,
  review_body TEXT,
  review_date TEXT,

  response_date TEXT,
  response_owner_id INT,
  response_body TEXT,

  PRIMARY KEY (reviews_id, listing_id) 
);
