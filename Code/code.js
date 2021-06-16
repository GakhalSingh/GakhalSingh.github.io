import  {getCurrencies} from "./CryptoStats.js"
import  {getPriceOfBTC} from "./CryptoStats.js"
import  {getPic       } from "./nasa.js"

// Hier is de Cryptocurrency API
if (document.URL.includes("CryptoStats.html") ) {
  async function loadCurrencies () {
    const data = await getCurrencies();
    let   Tabel = "0"
    for (let i = 0; i < data.length; i++) {
      document.getElementById("Tabel").innerHTML += data[i].name + " €" + data[i].minimal_amount + "<br> <br>";
  };
  };

  getPriceOfBTC();
  loadCurrencies();
  
  // Hier is de NASA Api
} if (document.URL.includes("PictureOfTheDay.html") ) {
  async function getPictureOfTheDay () {
    const data = await getPic();
    for (let i = 0; i < data.length; i++) {
      document.getElementById("PictureLocation").innerHTML += data[i].imq + "<br></br>";
  };
  };

  getPictureOfTheDay();
};

function button(){
  const bodyTheme = document.body;
  bodyTheme.classList.toggle("neonMode");
  // setInterval(button, 6000);
};
const NeonModeButton = document.getElementById('NeonModeButton');
NeonModeButton.onclick = () => {
  body.classList.replace('normalMode', 'neonMode');
};
function hourToDay() {
  let days = document.getElementById("numberDays").value;
  document.getElementById("hours").innerHTML = days / 24;
  console.log(days, hours);
};
function dayToHour() {
  let days = document.getElementById("numberHours").value;
  document.getElementById("days").innerHTML = days * 24;
  console.log(days, hours);
};



