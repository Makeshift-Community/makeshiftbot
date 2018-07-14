const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_generic_lambsauce extends commando.Command {
	constructor(client) {
		super(client, {
			name: "lambsauce",
			aliases: [
				"lambsauce",
				"lamb",
				"lambb",
				"located",
				"gordon",
				"ramsay",
				"sauce",
			],
			group: "memes-generic",
			memberName: "lambsauce",
			description: "Lamb Sauce L O C A T E D"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439494334149296128/lambsauce.jpg"}}},
			"https://youtu.be/NiESb9M1HmY"
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};