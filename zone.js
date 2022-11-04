const axios = require("axios");

module.exports = {
    getZone: (zipcode) => axios({
  method: 'GET',
  url: 'https://plant-hardiness-zone.p.rapidapi.com/zipcodes/' + zipcode,
  headers: {
    'X-RapidAPI-Key': 'f64bf2a778mshe47382446e419d5p16f94djsn4783dac120a2',
    'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com'
  },
  params: {
    zip:zipcode
  }
}
)}

//axios.request(options).then(function (response) {
//	console.log(response.data);
//}).catch(function (error) {
//	console.error(error);
//});
