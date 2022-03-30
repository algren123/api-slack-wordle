const router = require("express").Router();
const wordList = require("../consts/index.js");
const { getWordleResponse } = require("../helpers/index");

let dailyWord = wordList[Math.floor(Math.random() * wordList.length)];

const initDailyWord = () => {
  const d = new Date();

  if (d.getHours() === 0) {
    wordList.splice(array.indexOf(dailyWord), 1);
    dailyWord = wordList[Math.floor(Math.random() * wordList.length)];
  }
};

setInterval(initDailyWord, 60000);

router.route("/").get((req, res) => {
  const guess = req.query.guess;
  const guessArray = guess.split("");
  const dailyWordArray = dailyWord.split("");

  const response = getWordleResponse(guessArray, dailyWordArray);

  console.log(dailyWord);
  res.json(response);
});

module.exports = router;
