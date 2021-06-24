
    // Hier zijn alle buttons
    let currentPlayer = 0; 
    
    const fields = document.querySelectorAll('.board > .fields');
    const resetButton = document.querySelector(".reset-game-button");
    const btn1 = document.querySelector('.btnL1')
    const btn2 = document.querySelector('.btnM1')
    const btn3 = document.querySelector('.btnR1')
    const btn4 = document.querySelector('.btnL2')
    const btn5 = document.querySelector('.btnM2')
    const btn6 = document.querySelector('.btnR2')
    const btn7 = document.querySelector('.btnL3')
    const btn8 = document.querySelector('.btnM3')
    const btn9 = document.querySelector('.btnR3')
    const buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9]

    

    // Hier wordt een event listen toegevoegd aan de buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(){
    
            if (currentPlayer == 0){
                buttons[i].innerHTML = "X"
                currentPlayer = 1;

            } else if (currentPlayer == 1){
                buttons[i].innerHTML = "O"
                currentPlayer = 0;

            }
            checkWinner();
    })
 }
    
    resetButton.addEventListener("click", resetGame);
    
    
    function addSymbolToField(field) {
        const fieldContent = field.textContent;
        if (fieldContent === 'X' || fieldContent === 'O') {
            alert('This field can not be used');
        }
    
    }
    
    function checkWinner() {
    
        if (btn1.innerHTML == "X" && btn5.innerHTML == "X" && btn9.innerHTML == "X"){
            alert("X Wins, reset the game")
            counter = 0;
        }else if(btn1.innerHTML == "X" && btn2.innerHTML == "X" && btn3.innerHTML == "X"){
            alert("X Wins, reset the game")
            counter = 0;
        }else if(btn4.innerHTML == "X" && btn5.innerHTML == "X" && btn6.innerHTML == "X"){
            alert("X Wins, reset the game")
            counter = 0;
        }else if(btn7.innerHTML == "X" && btn8.innerHTML == "X" && btn9.innerHTML == "X"){
            alert("X Wins, reset the game")
            counter = 0;
        }else if(btn1.innerHTML == "X" && btn4.innerHTML == "X" && btn7.innerHTML == "X"){
            alert("X Wins, reset the game")
            counter = 0;
        }else if(btn2.innerHTML == "X" && btn5.innerHTML == "X" && btn8.innerHTML == "X"){
            alert("X Wins, reset the game")
            counter = 0;
        }else if(btn3.innerHTML == "X" && btn6.innerHTML == "X" && btn9.innerHTML == "X"){
            alert("X Wins, reset the game")
            counter = 0;
        }else if(btn3.innerHTML == "X" && btn5.innerHTML == "X" && btn7.innerHTML == "X"){
            alert("X Wins, reset the game")
            counter = 0;
        }
        
        if (btn1.innerHTML == "O" && btn5.innerHTML == "O" && btn9.innerHTML == "O"){
            alert("O Wins, reset the game")
            counter = 0;
        }else if(btn1.innerHTML == "O" && btn2.innerHTML == "O" && btn3.innerHTML == "O"){
            alert("O Wins, reset the game")
            counter = 0;
        }else if(btn4.innerHTML == "O" && btn5.innerHTML == "O" && btn6.innerHTML == "O"){
            alert("O Wins, reset the game")
            counter = 0;
        }else if(btn7.innerHTML == "O" && btn8.innerHTML == "O" && btn9.innerHTML == "O"){
            alert("O Wins, reset the game")
            counter = 0;
        }else if(btn1.innerHTML == "O" && btn4.innerHTML == "O" && btn7.innerHTML == "O"){
            alert("O Wins, reset the game")
            counter = 0;
        }else if(btn2.innerHTML == "O" && btn5.innerHTML == "O" && btn8.innerHTML == "O"){
            alert("O Wins, reset the game")
            counter = 0;
        }else if(btn3.innerHTML == "O" && btn6.innerHTML == "O" && btn9.innerHTML == "O"){
            alert("O Wins, reset the game")
            counter = 0;
        }else if(btn3.innerHTML == "O" && btn5.innerHTML == "O" && btn7.innerHTML == "O"){
            alert("O Wins, reset the game")
            counter = 0;
        }
    }
    
    function resetGame() {
        
    for (let i = 0; i < 9; i++) {
    
        buttons[i].innerHTML = "-"
        currentPlayer = 0;

    }
  }
    