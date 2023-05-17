//const axios = require('axios');


/*axios.get('https://blockchain.info/ticker')
  .then(response => {
    const tickerData = response.data;
    const euroLast = tickerData.EUR.last;
    console.log(euroLast);
  })
  .catch(error => {
    console.log(error);
  });*/
function bitcoinTempsReel(){
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(data => {
    const euroLast = data.EUR.last;
    console.log(euroLast);
    document.querySelector('#price_label_eur').textContent = euroLast;
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });
}

bitcoinTempsReel();

setInterval(bitcoinTempsReel, 10000);
  