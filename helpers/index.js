module.exports = {
  getWordleResponse: function (guessArray, dailyWordArray) {
    guessArray.map((letter, i) => {
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
