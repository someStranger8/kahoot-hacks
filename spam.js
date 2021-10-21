/*
 Time to hack the world
 Author: someStranger8
*/

const KahootSpam = require('kahoot-spam')
const rl = readline.createInterface({ input, output });

// inputs
var code = window.prompt("[*] Enter the code: ");
var name = window.prompt("[*] Enter the names of the bots: ");
var numbots = window.prompt("[*] Enter the number of bots: ");

// spam bots
let api = KahootSpam
api.spamWithAnswers(code, name, numbots, false)

// close readlines input output interface
rl.close()
