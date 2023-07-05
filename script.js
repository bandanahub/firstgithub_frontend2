function calculateScore(rolls) {
  let score = 0;

  // Calculate the score based on the dice rolls
  // You need to implement the scoring rules of the Ferengi Game of Daboo here.

  // Example scoring logic (modify according to the game rules):
  for (const roll of rolls) {
    if (roll === 1) {
      score += 10;
    } else if (roll === 6) {
      score += 6;
    } else {
      score += roll;
    }
  }

  return score;
}
