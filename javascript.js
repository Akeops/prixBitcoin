const axios = require('axios');


axios.get('https://blockchain.info/ticker')
  .then(response => {
    const tickerData = response.data;
    const euroLast = tickerData.EUR.last;
    console.log(euroLast);
  })
  .catch(error => {
    console.log(error);
  });