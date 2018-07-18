//External dependencies
var commando = require("discord.js-commando");
var path = require("path");
var moment = require("moment");
//Custom dependencies
var nkn1396_music = require("./modules/music/index");
//Load information
var token = require("./../token.json").nova;//I"m an idiot - Thanks for the lesson

//Start
var makeshiftBot = new commando.Client({
	commandPrefix : "/",
	unknownCommandResponse : false,
	owner : "153595272465743872"
});

//Activate custom modules
nkn1396_music(makeshiftBot, "340612526955823107");

//Configure & load command registry
makeshiftBot.registry
	.registerGroups([
		["other", "Other"]
	])
	.registerDefaultTypes()
	.registerCommandsIn(path.join(__dirname, "commands"));

console.log("nova-music");
console.log(moment(Date.now()).format("LLLL"));
makeshiftBot.login(token)
	.then(function(){
		console.log("Login successful");
		console.log("Logged in as " + makeshiftBot.user.tag);
	});