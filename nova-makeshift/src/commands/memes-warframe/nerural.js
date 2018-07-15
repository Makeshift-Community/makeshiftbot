const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_nerural extends commando.Command {
	constructor(client) {
		super(client, {
			name: "nerural",
			aliases: [
				"nerural",
				"sesar",
				"sesars",
				"neural",
				"sensor",
				"sensors"
			],
			group: "memes-warframe",
			memberName: "nerural",
			description: "The best typo"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508369875664926/nerural_sesars.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
