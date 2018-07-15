const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_lenz extends commando.Command {
	constructor(client) {
		super(client, {
			name: "lenz",
			aliases: [
				"lenz"
			],
			group: "memes-warframe",
			memberName: "lenz",
			description: "Lenz"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439745246054711297/lenz.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
