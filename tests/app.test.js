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

  test('It should send aggregate overview ratings for 1 listing', (done) => {
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

  test('It should send 6 reviews', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      expect(response.body.length).toBe(6);
      done();
    });
  });

  test('It should send a review object with a avg_rating key', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasAvgRating = true;
      response.body.forEach( (review) => {
        hasAvgRating = hasAvgRating && Object.keys(review).includes('avg_rating');
      });
      expect(hasAvgRating).toBe(true);
      done();
    });
  });

  test('It should send a review object with a review_date key', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasReviewDate = true;
      response.body.forEach( (review) => {
        hasReviewDate = hasReviewDate && Object.keys(review).includes('review_date');
      });
      expect(hasReviewDate).toBe(true);
      done();
    });
  });

  test('It should send a review object with a review_username key', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasReviewUsername = true;
      response.body.forEach( (review) => {
        hasReviewUsername = hasReviewUsername && Object.keys(review).includes('review_username');
      });
      expect(hasReviewUsername).toBe(true);
      done();
    });
  });

  test('It should send a review object with a user_pic_url key', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasUserPicURL = true;
      response.body.forEach( (review) => {
        hasUserPicURL = hasUserPicURL && Object.keys(review).includes('user_pic_url');
      });
      expect(hasUserPicURL).toBe(true);
      done();
    });
  });

  test('It should send a review object with a review_body key', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasReviewBody = true;
      response.body.forEach( (review) => {
        hasReviewBody = hasReviewBody && Object.keys(review).includes('review_body');
      });
      expect(hasReviewBody).toBe(true);
      done();
    });
  });

  test('It should send a review object with a response_date key', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasResponseDate = true;
      response.body.forEach( (review) => {
        hasResponseDate = hasResponseDate && Object.keys(review).includes('response_date');
      });
      expect(hasResponseDate).toBe(true);
      done();
    });
  });

  test('It should send a review object with a host_username key', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasHostUsername = true;
      response.body.forEach( (review) => {
        hasHostUsername = hasHostUsername && Object.keys(review).includes('host_username');
      });
      expect(hasHostUsername).toBe(true);
      done();
    });
  });

  test('It should send a review object with a host_pic_url key', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasHostPicURL = true;
      response.body.forEach( (review) => {
        hasHostPicURL = hasHostPicURL && Object.keys(review).includes('host_pic_url');
      });
      expect(hasHostPicURL).toBe(true);
      done();
    });
  });

  test('It should send a review object with a response_body key', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      var hasResponseBody = true;
      response.body.forEach( (review) => {
        hasResponseBody = hasResponseBody && Object.keys(review).includes('response_body');
      });
      expect(hasResponseBody).toBe(true);
      done();
    });
  });

  test('It should send null response_date for responseless reviews', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      response.body.forEach( (review) => {
        if (review.response_body === 'NULL') {
          expect(review.response_date).toBe(null);    
        }
      });
      done();
    });
  });

  test('It should send valid response_date for reviews with responses', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      response.body.forEach( (review) => {
        if (review.response_body !== 'NULL') {
          expect((typeof review.response_date) === 'string').toBe(true);
        }
      });
      done();
    });
  });

  test('It should send valid avg_rating', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      expect(response.body[0].avg_rating).toBe(2.8333);
      done();
    });
  });

  test('It should send valid review_date', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      expect(response.body[0].review_date).toBe('June 2016');
      done();
    });
  });

  test('It should send valid review_username', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      expect(response.body[0].review_username).toBe('Donnetta');
      done();
    });
  });

  test('It should send valid user_pic_url', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      expect(response.body[0].user_pic_url).toBe('https://s3.us-east-2.amazonaws.com/hrsf96reviewmodule/3.jpg');
      done();
    });
  });

  test('It should send valid review_body', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      expect(response.body[0].review_body).toBe('Mei novum possim salutandi an, ius ei tollit minimum, summo postea persequeris cu eos. Novum audiam audire qui ut. Praesent partiendo at mea, ut quaestio platonem est. Id eam appetere expetenda. Usu etiam vivendum ex.');
      done();
    });
  });

  test('It should send valid response_date', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      expect(response.body[0].response_date).toBe('June 2016');
      done();
    });
  });

  test('It should send valid host_username', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      expect(response.body[0].host_username).toBe('Tonda');
      done();
    });
  });

  test('It should send valid host_pic_url', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      expect(response.body[0].host_pic_url).toBe('https://s3.us-east-2.amazonaws.com/hrsf96reviewmodule/99.jpg');
      done();
    });
  });

  test('It should send valid response_body', (done) => {
    request(app).get('/reviews/listingId/2/reviews').then((response) => {
      expect(response.body[0].response_body).toBe('Semper commodo accusam no vim, eos offendit scribentur liberavisse ea. Ea ludus nullam ceteros cum, an consul causae apeirian nam, usu dicam affert philosophia ea. Sed ei enim virtute dissentiet, an vel nobis accusam oporteat. Ne dolore postulant interpretaris quo, duo dicat necessitatibus ut, et vim justo fugit eleifend. Mel melius debitis et, veniam pertinacia sit ut.');
      done();
    });
  });
});

describe('Test GET /reviews/listingId/:listingId', () => {
  test('It should respond with a 500 status code', (done) => {
    request(app).get('/reviews/listingId/1 AND').then((response) => {
      expect(response.statusCode).toBe(500);
      done();
    });
  });
});

describe('Test GET /reviews/listingId/:listingId/reviews', () => {
  test('It should respond with a 500 status code', (done) => {
    request(app).get('/reviews/listingId/1 AND/reviews').then((response) => {
      expect(response.statusCode).toBe(500);
      done();
    });
  });
});