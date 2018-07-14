const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_oberon extends commando.Command {
	constructor(client) {
		super(client, {
			name: "oberon",
			aliases: [
				"oberon"
			],
			group: "memes-warframe",
			memberName: "oberon",
			description: "Oberon"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439752663853432874/oberon.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
