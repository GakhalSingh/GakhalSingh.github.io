//function button(){
//  const bodyTheme = document.body;
//  bodyTheme.classList.toggle("neonMode");
//  // setInterval(button, 6000);
//};
//const NeonModeButton = document.getElementById('NeonModeButton');
//NeonModeButton.onclick = () => {
//  body.classList.replace('normalMode', 'neonMode');
//};
let antwoord = 0;
let input1 = "0" + document.getElementById('inputNumber1').value;
let input2 = "0" + document.getElementById('inputNumber2').value;

const numberOne =   "1";
const numberTwo =   "2";
const numberThree = "3";
const numberFour =  "4";
const numberFive =  "5";
const numberSix =   "6";
const numberSeven = "7";
const numberEight = "8";
const numberNine =  "9";
const numberZero =  "0";

function keerSom() {
    let input1 = document.getElementById('inputNumber1').value;
    let input2 = document.getElementById('inputNumber2').value;
    antwoord = input1 * input2;
    console.log(input1, input2, antwoord);
  };
  function plusSom() {
    let input1 = document.getElementById('inputNumber1').value;
    let input2 = document.getElementById('inputNumber2').value;
    antwoord = parseInt(input1) + parseInt(input2);
    console.log(input1, input2, antwoord);
  };
  function minSom() {
    let input1 = document.getElementById('inputNumber1').value;
    let input2 = document.getElementById('inputNumber2').value;
    antwoord = input1 - input2;
    console.log(input1, input2, antwoord);
  };
  function addEen() {
    let input1 = document.getElementById('inputNumber1');
    input1 = input1 +1;
    console.log(input1,);
  };
  function printantwoord() {
    console.log(antwoord);
    alert("Het antwoord is " + antwoord)
  };