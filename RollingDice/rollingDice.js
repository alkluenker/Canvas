function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
  }
   
  for (var i = 0; i < 10; i++) {
    console.log(rollDice(20));
  }