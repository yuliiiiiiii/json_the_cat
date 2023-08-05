let breedName = process.argv.slice(2).join('');

const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

