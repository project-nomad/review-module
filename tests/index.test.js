const request = require('supertest');
const app = require('../server/app');

describe('Test GET /', () => {

  test('It should respond with a status code', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('It should serve index.html', (done) => {
    request(app).get('/').then((response) => {
      expect(response.type).toBe('text/html');
      done();
    });
  });
});

describe('Test GET /reviews/listingId/1', () => {

  test('It should respond with a status code', (done) => {
    request(app).get('/reviews/listingId/1').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('It should send aggregate over ratings for 1 listing', (done) => {
    request(app).get('/reviews/listingId/1').then((response) => {
      expect(response.body.length).toBe(1);
      done();
    });
  });

  test('It should send total_reviews', (done) => {
    request(app).get('/reviews/listingId/1').then((response) => {
      expect(response.body[0].total_reviews).toBe(3);
      done();
    });
  });

  test('It should send avg_accuracy', (done) => {
    request(app).get('/reviews/listingId/1').then((response) => {
      expect(response.body[0].avg_accuracy).toBe(3.6667);
      done();
    });
  });

  test('It should send avg_communication', (done) => {
    request(app).get('/reviews/listingId/1').then((response) => {
      expect(response.body[0].avg_communication).toBe(4.6667);
      done();
    });
  });

  test('It should send avg_cleanliness', (done) => {
    request(app).get('/reviews/listingId/1').then((response) => {
      expect(response.body[0].avg_cleanliness).toBe(4.6667);
      done();
    });
  });

  test('It should send avg_location', (done) => {
    request(app).get('/reviews/listingId/1').then((response) => {
      expect(response.body[0].avg_location).toBe(3);
      done();
    });
  });

  test('It should send avg_checkin', (done) => {
    request(app).get('/reviews/listingId/1').then((response) => {
      expect(response.body[0].avg_checkin).toBe(3.6667);
      done();
    });
  });

  test('It should send avg_value', (done) => {
    request(app).get('/reviews/listingId/1').then((response) => {
      expect(response.body[0].avg_value).toBe(3.3333);
      done();
    });
  });
});

describe('Test GET /reviews/listingId/2/reviews', () => {

  test('It should respond with a status code', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('It should contain 6 reviews', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      expect(response.body.length).toBe(6);
      done();
    });
  });

  test('It should send avg_rating', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasAvgRating = true;
      response.body.forEach( (review) => {
        hasAvgRating = hasAvgRating && Object.keys(review).includes('avg_rating');
      });
      expect(hasAvgRating).toBe(true);
      done();
    });
  });

  test('It should send review_date', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasReviewDate = true;
      response.body.forEach( (review) => {
        hasReviewDate = hasReviewDate && Object.keys(review).includes('review_date');
      });
      expect(hasReviewDate).toBe(true);
      done();
    });
  });

  test('It should send review_username', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasReviewUsername = true;
      response.body.forEach( (review) => {
        hasReviewUsername = hasReviewUsername && Object.keys(review).includes('review_username');
      });
      expect(hasReviewUsername).toBe(true);
      done();
    });
  });

  test('It should send user_pic_url', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasUserPicURL = true;
      response.body.forEach( (review) => {
        hasUserPicURL = hasUserPicURL && Object.keys(review).includes('user_pic_url');
      });
      expect(hasUserPicURL).toBe(true);
      done();
    });
  });

  test('It should send review_body', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasReviewBody = true;
      response.body.forEach( (review) => {
        hasReviewBody = hasReviewBody && Object.keys(review).includes('review_body');
      });
      expect(hasReviewBody).toBe(true);
      done();
    });
  });

  test('It should send response_date', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasResponseDate = true;
      response.body.forEach( (review) => {
        hasResponseDate = hasResponseDate && Object.keys(review).includes('response_date');
      });
      expect(hasResponseDate).toBe(true);
      done();
    });
  });

  test('It should send host_username', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasHostUsername = true;
      response.body.forEach( (review) => {
        hasHostUsername = hasHostUsername && Object.keys(review).includes('host_username');
      });
      expect(hasHostUsername).toBe(true);
      done();
    });
  });

  test('It should send host_pic_url', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasHostPicURL = true;
      response.body.forEach( (review) => {
        hasHostPicURL = hasHostPicURL && Object.keys(review).includes('host_pic_url');
      });
      expect(hasHostPicURL).toBe(true);
      done();
    });
  });

  test('It should send response_body', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasResponseBody = true;
      response.body.forEach( (review) => {
        hasResponseBody = hasResponseBody && Object.keys(review).includes('response_body');
      });
      expect(hasResponseBody).toBe(true);
      done();
    });
  });
});