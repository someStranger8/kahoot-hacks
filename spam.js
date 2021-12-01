
// time to hack

const KahootSpam = require('kahoot-spam')

// varibles
var code = 1111111;
var name = "name";
var numbots = 10;
var i = 1;

// spam bots with answers
let api = KahootSpam
while (i < 10) return api.spamWithAnswers(code, name, numbots, true);
