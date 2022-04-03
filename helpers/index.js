const { allWordList } = require("../consts/index");

module.exports = {
  isWordValid: function (guess) {
    return allWordList.includes(guess);
  },
  getWordleResponse: function (guessArray, dailyWordArray) {
    return guessArray.map((letter, i) => {
      let result = "";

      if (letter === dailyWordArray[i]) {
        result = "correct";
      } else if (dailyWordArray.includes(letter)) {
        result = "present";
      } else {
        result = "absent";
      }

      return {
        slot: i,
        guess: letter,
        result,
      };
    });
  },
};
