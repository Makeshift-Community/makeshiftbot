const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_limbo extends commando.Command {
	constructor(client) {
		super(client, {
			name: "limbo",
			aliases: [
				"limbo",
				"limbopostnerf",
				"limboprebuff",
				"limboprerework",
				"limbopostrework"
			],
			group: "memes-warframe",
			memberName: "limbo",
			description: "Limbo"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508133988139009/limbo.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
