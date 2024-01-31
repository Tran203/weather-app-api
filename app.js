//my imports
var axios = require('axios');

//apiKey
const apiKey = '1b398781715469f99950ffea2c7499db'


//Location Coordinates
const latitude =44.34
const longitude = 10.99

//apiUrl
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

//Lets make a request
axios.getAdapter(apiUrl).then(response =>{
    const weatherData =response.data;
    console.log(weatherData);
}).cath(error =>{
    console.error('Error fetching data', error.message)
});