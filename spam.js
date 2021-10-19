// hack the world
const KahootSpam = require('kahoot-spam')
const rl = readline.createInterface({ input, output });

// inputs
const code = await rl.question('What is the code');
const name = await rl.question('What are the names of the bots');
const numofbots = await rl.question('What is the number of bots');

// spam bots
let api = KahootSpam
api.spamWithAnswers(code, name, numofbots, false)

// close readlines input output interface
rl.close()
