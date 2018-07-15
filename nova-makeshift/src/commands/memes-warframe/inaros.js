const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_inaros extends commando.Command {
	constructor(client) {
		super(client, {
			name: "inaros",
			aliases: [
				"inaros",
				"pocketsand"
			],
			group: "memes-warframe",
			memberName: "inaros",
			description: "Inaros"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439506799620784128/inaros.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
