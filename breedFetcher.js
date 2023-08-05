const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error,response, body) => {
    const data = JSON.parse(body); //the body originally is JSON, need to change it from JSON string to Javascript object
    // console.log(response && response.statusCode);
    // console.log(typeof data);
    // if (body === []) {
    //   console.log('Sorry we do not have the breed');
    // }
    if (error) { //the error from connection!, it is considered as an input so try{}catch{} will not consider it as an err
      callback(error, null);
      return;
    }
    if (data.length === 0) { //if the breed doesn't exist, the api will return an empty array []
      callback(null, 'Sorry we don\'t have the breed');
      return;
    }
    if (data.length !== 0) {
      callback(null, data[0].description);
    }

  });

};
module.exports = { fetchBreedDescription };