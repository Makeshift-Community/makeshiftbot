const Discord = require("discord.js");
const bot = new Discord.Client;

bot.login()
	.then(function(){
		console.log(`Logged in as ${bot.user.tag}`);
		//bot.user.setUsername("Kanna");
		//bot.user.setAvatar("./resources/kanna.png");
		bot.user.setActivity(("Just here so Bodek shuts up."), {type: "PLAYING"});
		//bot.guilds.get("272036959348588555").me.setNickname("Subject to aboose");
	});
