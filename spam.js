
const KahootSpam = require('kahoot-spam');
const prompt = require("prompt-sync")({ sigint: true });

// varibles
var code = prompt("[*] enter kahoot code: ");
var name = prompt("[*] enter bot name: ");
var numbots = prompt("[*] enter amount of bots: ");

// spam bots with answers
let api = KahootSpam
api.spamWithAnswers(code, name, numbots, true);
