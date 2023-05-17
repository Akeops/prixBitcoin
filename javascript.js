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
function bitcoinTempsReelEUR(){
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

function bitcoinTempsReelUSD(){
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(data => {
    const usdLast = data.USD.last;
    console.log(usdLast);
    document.querySelector('#price_label_usd').textContent = usdLast;
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });
}

bitcoinTempsReelEUR();

setInterval(bitcoinTempsReelEUR, 10000);
  

bitcoinTempsReelUSD();

setInterval(bitcoinTempsReelUSD, 10000);