//External dependencies
const commando = require("discord.js-commando");
const path = require("path");
const moment = require("moment");
//Custom dependencies
const makeshift_greet = require("./modules/makeshift_greet/index");
const makeshift_modbuilds = require("./modules/makeshift_modbuilds/index");
const makeshift_prism = require("./modules/makeshift_prism/index");
const makeshift_sassynova = require("./modules/makeshift_sassynova/index");
const makeshift_soontm = require("./modules/makeshift_soontm/index");
const makeshift_voicemagic = require("./modules/makeshift_voicemagic/index");
//Load information from package.json
const token = require("./../token.json").nova;//I'm an idiot - Thanks for the lesson
//Start
const makeshiftBot = new commando.Client({
	commandPrefix : "/",
	unknownCommandResponse : false,
	owner : "153595272465743872"
});

//Activate modules
makeshift_greet(makeshiftBot, "272036959348588555");
makeshift_modbuilds(makeshiftBot, "410741742489567233"); //builds channel
makeshift_prism(makeshiftBot);
makeshift_sassynova(makeshiftBot, "Nova, ");
makeshift_soontm(makeshiftBot);
makeshift_voicemagic(makeshiftBot);

//Configure & load command registry
makeshiftBot.registry
	.registerGroups([
		["debug", "DEBUG_INFO"],
		["makeshift", "Makeshift"],
		["resources", "Resources"],
		["music", "Music"],
		["memes-warframe", "Memes (Warframe)"],
		["memes-makeshift", "Memes (Makeshift)"],
		["memes-generic", "Memes (general)"],
		["other", "Other"],
		["moderative", "Moderative"]
	])
	.registerDefaultGroups()
	.registerDefaultTypes()
	.registerDefaultCommands(
		{
			"help" : true,
			"prefix" : false,
			"eval_" : true,
			"ping" : false,
			"commandState" : false
		}
	)
	.registerCommandsIn(path.join(__dirname, "commands"));

console.log("nova-makeshift");
console.log(moment(Date.now()).utcOffset(1).format("LLLL"));
makeshiftBot.login(token)
	.then(function(){
		console.log("Login successful");
		console.log("Logged in as " + makeshiftBot.user.tag);
		makeshiftBot.user.setActivity(("@" + makeshiftBot.user.username + " help"), {type: "PLAYING"});
		makeshiftBot.users.get("153595272465743872").send("✅ **Debug**:\n`nova-makeshift` has been restarted.");
	});
