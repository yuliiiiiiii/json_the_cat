const request = require('request');
let breed = process.argv.slice(2).join('');
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(URL, (error,response, body) => {
  const data = JSON.parse(body); //the body originally is JSON, need to change it from JSON string to Javascript object
  // console.log(response && response.statusCode);
  // console.log(typeof data);
  // if (body === []) {
  //   console.log('Sorry we do not have the breed');
  // }
  if (error) { //the error from connection!, it is considered as an input so try{}catch{} will not consider it as an err
    console.log(error);
    return;
  }
  if (data.length === 0) { //if the breed doesn't exist, the api will return an empty array []
    console.log('Sorry we don\'t have the breed');
    return;
  }
  if (data.length !== 0) {
    console.log(data[0].description);
  }

});