const request = require('request');
const breedUserInput = process.argv.splice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(breedUserInput)}`, (error, respone, body) => {

  if (error) {
    return console.log(`Error ${error.errno}. Deitals: ${error.code} ${error.syscall}.`);
  }

  try {
    const data = JSON.parse(body);
    console.log(data[0].description);
  } catch (error) {
    console.log(`Sorry! ${breedUserInput} is not available.`);
  }
});