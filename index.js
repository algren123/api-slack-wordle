var express = require("express");
var app = express();

const port = process.env.PORT || 7070;

app.use(express.json());

const dailyGuessRouter = require("./routes/dailyGuess");

app.use("/daily", dailyGuessRouter);

app.use("/", (req, res) => {
  res.json(
    "Hello, this is the API for the Slack Wordle created by Algren Pauna"
  );
});

app.use((req, res) => {
  res.status(404).send("Sorry, that route doesn't exist");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
