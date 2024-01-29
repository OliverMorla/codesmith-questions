function closestToTheMark(player1, player2){
    const theMark = Math.floor(Math.random() * 100)
    console.log(`If theMark is ${theMark}...`);
    // ADD CODE HERE
    if(player1 < theMark){
      return "Player 1 is closest"
    } else {
      return "Player 2 is closest"
    }
  }
  
  // Uncomment the line below to check your work!
  console.log(closestToTheMark(25, 75));
  