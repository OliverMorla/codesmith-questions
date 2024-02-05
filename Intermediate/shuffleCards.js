function shuffleCards(topHalf, bottomHalf, count = 0, result = []) {
  // YOUR CODE HERE
  if (count === topHalf.length + bottomHalf.length) {
    return result.filter((el, i) => el !== undefined);
  } else {
    result.push(topHalf[count]);
    result.push(bottomHalf[count]);
    return shuffleCards(topHalf, bottomHalf, count + 1, result);
  }
}

// UNCOMMENT TO TEST YOUR WORK
const topHalf = [
  "Queen of Diamonds",
  "Five of Hearts",
  "Ace of Spades",
  "Eight of Clubs",
];
const bottomHalf = ["Jack of Hearts", "Ten of Spades"];
console.log(shuffleCards(topHalf, bottomHalf));
/*-> ['Queen of Diamonds',
          'Jack of Hearts',
          'Five of Hearts',
          'Ten of Spades',
          'Ace of Spades',
          'Eight of Clubs',
        ]
    */
