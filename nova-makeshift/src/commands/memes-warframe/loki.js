const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_loki extends commando.Command {
	constructor(client) {
		super(client, {
			name: "loki",
			aliases: [
				"loki"
			],
			group: "memes-warframe",
			memberName: "loki",
			description: "Loki"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508186471596042/loki.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
