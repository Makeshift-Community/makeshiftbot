const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_gara extends commando.Command {
	constructor(client) {
		super(client, {
			name: "gara",
			aliases: [
				"gara"
			],
			group: "memes-warframe",
			memberName: "gara",
			description: "Gara"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439751814762594305/gara.jpg"}}}
			//Image of Gara in snow fort
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
