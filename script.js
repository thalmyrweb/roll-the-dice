const diceImages = document.querySelectorAll(".dice img");
const resultText = document.querySelector(".setwin");
function dice() {
  const randomNumber1 = getRandomDiceNumber();
  const randomNumber2 = getRandomDiceNumber();
  diceImages[0].setAttribute("src", `./images/dice${randomNumber1}.png`);
  diceImages[1].setAttribute("src", `./images/dice${randomNumber2}.png`);
  if (randomNumber1 > randomNumber2) {
    resultText.textContent = "🏆 Player 1 Win";
  } else if (randomNumber1 < randomNumber2) {
    resultText.textContent = "Player 2 Win 🏆";
  } else {
    resultText.textContent = "🏆 Draw 🏆";
  }
}
function getRandomDiceNumber() {
  return Math.floor(Math.random() * 6) + 1;
}
