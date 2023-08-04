const request = require('request');
let breed = process.argv.slice(2).join(' ');
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(URL, (error,response, body) => {
  const data = JSON.parse(body); //the body originally is JSON, need to change it from JSON string to Javascript object
  // console.log(response && response.statusCode);
  // console.log(typeof data);
  try {
    console.log(data[0].description);
  }  catch (error) { //the error from the URL output is not referred
    console.log(error);
  }

});