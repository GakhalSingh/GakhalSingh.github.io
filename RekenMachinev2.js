function keerSom() {
    let input1 = document.getElementById('inputNumber5').value;
    let input2 = document.getElementById('inputNumber6').value;
    antwoord = input1 * input2;
    console.log(input1, input2, antwoord);
    alert("Uw antwoord voor uw keersom is " + antwoord);
  };
  function plusSom() {
    let input1 = document.getElementById('inputNumber1').value;
    let input2 = document.getElementById('inputNumber2').value;
    antwoord = input1 + input2;
    console.log(input1, input2, antwoord);
    alert("Uw antwoord voor uw plussom is " + antwoord);
  };
  function minSom() {
    let input1 = document.getElementById('inputNumber3').value;
    let input2 = document.getElementById('inputNumber4').value;
    antwoord = input1 - input2;
    console.log(input1, input2, antwoord);
    alert("Uw antwoord voor uw minsom is " + antwoord);
  };
  function deelSom() {
    let input1 = document.getElementById('inputNumber7').value;
    let input2 = document.getElementById('inputNumber8').value;
    antwoord = input1 / input2;
    console.log(input1, input2, antwoord);
    alert("Uw antwoord voor uw deelsom is " + antwoord);
  };

  function EURtoUSD() {
    let input1 = document.getElementById('inputNumber9').value;
    antwoord = input1 * 1.20;
    console.log(input1, antwoord);
    alert("De waarde van EUR naar USD is $" + antwoord);
  };
  function USDtoEUR() {
    let input1 = document.getElementById('inputNumber10').value;
    antwoord = input1 * 0.83;
    console.log(input1, antwoord);
    alert("De waarde van USD naar EUR is €" + antwoord);
  };
  function EURtoBITC() {
    let input1 = document.getElementById('inputNumber11').value;
    antwoord = input1 / 46762.26;
    console.log(input1, antwoord);
    alert("De waarde van EUR naar BITC is B" + antwoord);
  };
  function BITCtoEUR() {
    let input1 = document.getElementById('inputNumber12').value;
    antwoord = input1 * 46762.26
    console.log(input1, antwoord);
    alert("Uw antwoord voor uw deelsom is €" + antwoord);
  };