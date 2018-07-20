//External dependencies
var commando = require("discord.js-commando");
var path = require("path");

//Start
var makeshiftBot = new commando.Client({
	commandPrefix : "/",
	unknownCommandResponse : false,
	owner : "153595272465743872",
	messageCacheMaxSize	: 2000
});

//Start logs
require("./src/listeners/join")(makeshiftBot, "303662183558938625");
require("./src/listeners/leave")(makeshiftBot, "303662183558938625");
require("./src/listeners/rename")(makeshiftBot, "303662183558938625");

//Start error handlers
require("./../src/listeners/error")(makeshiftBot);
require("./../src/listeners/disconnect")(makeshiftBot);
require("./../src/listeners/guildUnavailable")(makeshiftBot);
require("./../src/listeners/ready")(makeshiftBot);
require("./../src/listeners/reconnecting")(makeshiftBot);
require("./../src/listeners/resume")(makeshiftBot);

//Configure & load command registry
makeshiftBot.registry
	.registerGroups([
		["other", "Other"]
	])
	.registerDefaultTypes()
	.registerCommandsIn(path.join(__dirname, "src/commands"));

makeshiftBot.login(require("./../token.json").nova);
