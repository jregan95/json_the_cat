const { fetchBreedDescription } = require("./breedFetcher");
const breedName = process.argv.splice(2);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details,', error);
  } else {
    console.log(desc);

  }
});