const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_harrowrepel extends commando.Command {
	constructor(client) {
		super(client, {
			name: "harrowrepel",
			aliases: [
				"harrowrepel",
				"repel",
				"cease"
			],
			group: "memes-warframe",
			memberName: "harrowrepel",
			description: "CEASE!"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439740571985248277/harrowrepel.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
