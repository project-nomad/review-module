const request = require('supertest');
const db = require('../database/index');

describe('Test getOverview', () => {
  test('It should error on illegal queries', (done) => {
    db.getOverview('invalid-query', (err, result) => {
      var hasError = false;
      if (err) {
        hasError = true;
      }
      expect(hasError).toBe(true);
      done();
    });
  });
});

describe('Test getReviews', () => {
  test('It should error on illegal queries', (done) => {
    db.getReviews('invalid-query', (err, result) => {
      var hasError = false;
      if (err) {
        hasError = true;
      }
      expect(hasError).toBe(true);
      done();
    });
  });
});