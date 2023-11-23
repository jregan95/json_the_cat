const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}`;

  request(url, (error, response, body) => {
  
    if (error) {
      callback(`Error ${error.errno}. Deitals: ${error.code} ${error.syscall}.`, null);
      return;
    }

    const data = JSON.parse(body);
    const breedDesc = data[0];

    if (breedDesc) {
      
      callback(null, breedDesc.description);
      return;
      
    }
    callback(`Sorry! ${breedName} is not available.`, null);
    return;
      

 
  });
};


module.exports = { fetchBreedDescription };