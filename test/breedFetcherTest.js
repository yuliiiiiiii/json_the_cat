const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valie breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns "Sorry we don\'t have the breed" if an non-existent breed is passed on', (done) => {
    fetchBreedDescription('abc', (err,desc) => {
      assert.equal(err, null);

      const expectedDesc = "Sorry we don't have the breed";

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
});