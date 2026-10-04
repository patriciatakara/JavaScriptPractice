  let score = JSON.parse(localStorage.getItem('score')) || {wins:0, losses:0, ties: 0};
      let result = JSON.parse(localStorage.getItem('result')) || {result: 0};
      let playerChoice = JSON.parse(localStorage.getItem('move')) || {move: 0};

      // Refresh the score shown on the page after saving the updated totals.
      displayScore();
      //displayResult();
      //displayMoves();

      function playGame(playerChoice) {

        let pC = Math.random();
        if(playerChoice === "reset"){
          score.wins=0; 
          score.losses = 0; 
          score.ties = 0
          displayScore();
          return;
        }
      
        // PC picks a move
        if(pC >= 0 && pC < 1/3){
          pC = 'rock';
        }else if(pC >= 1/3 && pC <2/3){
          pC = 'paper';
        }else if(pC >= 2/3 && pC <1){
          pC ='scissors';
        }

        // Compare our move against the PC
        if (playerChoice === pC){
          result = 'Tie.';
          score.ties++;
        }else if(
          (playerChoice === 'rock' && pC === 'scissors') || 
          (playerChoice === 'paper' && pC === 'rock') ||
          (playerChoice === 'scissors' && pC === 'paper')){
            result = 'You win!';
            score.wins++; 
          }
        else{
          result = 'You lose.'
          score.losses++;
        }

        // Save the updated score so it persists after the page is refreshed.
        localStorage.setItem('score', JSON.stringify(score));
        localStorage.setItem('result', JSON.stringify(result));
        localStorage.setItem('move', JSON.stringify(playerChoice));
        localStorage.setItem('pC', JSON.stringify(pC));

        // Refresh the result, moves, and score shown on the page after the latest round.
        displayScore();
        displayResult();
        displayMoves(playerChoice,pC);

        return 
      }
      
      // Update the score displayed on the page afrer each round.
      function displayScore() {
        document.querySelector('.js-score').innerHTML =`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
      }
        
      // Update the result displayed after each round.
      function displayResult(){
        document.querySelector('.js-result').innerHTML =`${result}`;   
      }

      // Update the moves displayed after each round.
      function displayMoves(our,pc){
        document.querySelector('.js-move').innerHTML =`<img src="${our}-emoji.png"  class ="move-icon">   X   <img src="${pc}-emoji.png"  class ="move-icon">`;
      }
