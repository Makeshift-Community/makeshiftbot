const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_relic extends commando.Command {
	constructor(client) {
		super(client, {
			name: "relic",
			aliases: [
				"relic",
				"cabbage",
				"relics",
				"cabbages"
			],
			group: "memes-warframe",
			memberName: "relic",
			description: "Relic"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439743832087592962/relic.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
