// hack the world
const KahootSpam = require('kahoot-spam')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What is the kahoot code', code => {
  readline.close();
});

readline.question('What is the name of the bot', name => {
  readline.close();
});

readline.question('What is the number of bots', numofbots => {
  readline.close();
});

let api = KahootSpam
api.spamWithAnswers(code, name, numofbots, false)
