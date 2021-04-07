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
let input1 = document.getElementById('inputNumber1').value;
let input2 = document.getElementById('inputNumber2').value;

function keerSom() {
    let input1 = document.getElementById('inputNumber1').value;
    let input2 = document.getElementById('inputNumber2').value;
    antwoord = input1 * input2;
    console.log(input1, input2, antwoord);
  };
  function plusSom() {
    let input1 = document.getElementById('inputNumber1').value;
    let input2 = document.getElementById('inputNumber2').value;
    antwoord = input1 + input2;
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