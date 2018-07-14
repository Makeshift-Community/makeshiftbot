//External dependencies
const commando = require("discord.js-commando");
const path = require("path");

//Start
const makeshiftBot = new commando.Client({
	commandPrefix : "/",
	unknownCommandResponse : false,
	owner : "153595272465743872",
	messageCacheMaxSize	: 2000
});

//Start logs
require("./src/listeners/ready")(makeshiftBot, "303662183558938625");
require("./src/listeners/join")(makeshiftBot, "303662183558938625");
require("./src/listeners/leave")(makeshiftBot, "303662183558938625");
require("./src/listeners/rename")(makeshiftBot, "303662183558938625");

//Configure & load command registry
makeshiftBot.registry
	.registerGroups([
		["other", "Other"]
	])
	.registerDefaultTypes()
	.registerCommandsIn(path.join(__dirname, "src/commands"));

makeshiftBot.login(require("./../token.json").nova);
