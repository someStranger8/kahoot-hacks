/*
 Time to hack the world
 Author: someStranger8
*/

const KahootSpam = require('kahoot-spam')

// varibles
var code = 1111111;
var name = "name";
var numbots = 10;

// spam bots
let api = KahootSpam
api.spamWithAnswers(code, name, numbots, 0.5)
