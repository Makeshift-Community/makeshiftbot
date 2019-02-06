var Discord = require("discord.js");
var bot = new Discord.Client;

bot.login("NDI5NjcxMDg4NzA0NzE2ODAw.DzY_7w.9yT5lz_wi19FlE3zQLTQFiSnFbU")
	.then(function(){
		console.log(`Logged in as ${bot.user.tag}`);
		//bot.user.setUsername("Kanna");
		//bot.user.setAvatar("./resources/kanna.png");
		bot.user.setActivity(("Just here so Bodek shuts up."), {type: "PLAYING"});
		//bot.guilds.get("272036959348588555").me.setNickname("Subject to aboose");
	});


bot.on("message", message => {
	if(!message.content.startsWith("/space")) return;
	message.channel.setName(message.channel.name.replace(/-/g, "\u2009\u2009"));
	message.delete();
});


bot.on("message", message => {
	if(!message.content.startsWith("/sep")) return;
	var role = message.guild.roles.find("name", "Seperator1");
	role.setName(role.name + "\u2006");
	console.log("role");
});
