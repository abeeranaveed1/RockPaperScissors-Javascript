console.log("ROCK PAPER SCISSORS GAME")



function computer_selection() {
    let Selection = ["rock", "paper", "scissors"];
    const computer_Selection = Math.floor(Math.random() * Selection.length);
    computer_Selection.toString();
    console.log("The computer has selected: " + Selection[computer_Selection]);
    return Selection[computer_Selection];
  }

  function player_selection() {
    let options = ["rock", "paper", "scissors"];
    let userSelection = "";
    do {
      userSelection = prompt(
        "Pick between Rock, Paper, and Scissors"
      );

      if (userSelection) {
        userSelection = userSelection.toLowerCase();
      }

    } while (!options.includes(userSelection));
      console.log("You picked: ",userSelection)
    return userSelection;
  }

  function playRound(computer_choice, player_choice){
  if (computer_choice === player_choice) {
  console.log("It's a tie!")
  return "tie";
  }
  else if (player_choice === 'rock' && computer_choice === "paper") {
     console.log("Paper beats rock. ROUND LOST!")
          return false;
  }
  else if (player_choice === 'scissors' && computer_choice === "rock") {
     console.log("Rock beats scissors. YOU LOST!")
          return false;
  }
  else if (player_choice === 'paper' && computer_choice === "scissors") {
     console.log("Scissors beats paper. YOU LOST!")
          return false;
  }
  else{
    console.log("CONGRATULATIONS YOU WON THIS ROUND!");
      return true;
  }
  };


  function game(){
      let user_score = 0;
      let computer_score = 0;
      let tiedGames = 0;
      for (let i = 0 ; i < 5 ; i++){
          let players_choice = player_selection();
          let computer_choice = computer_selection();
          const result = playRound(computer_choice,players_choice)
          if (result !== "tie"){
              if (result){
                  user_score++
              }else{
                  computer_score++
              }
          }else{
              tiedGames++;
          }
      }
      console.log("User Score:",user_score)
      console.log("Computer Score:",computer_score)
      console.log("Games Tied:",tiedGames)
      if (user_score>computer_score){
        console.log("Congratulations you won the game!")
      } else{console.log("Unfortunately, you lost against the computer")}
  }

  game();