const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_ash extends commando.Command {
	constructor(client) {
		super(client, {
			name: "ash",
			aliases: [
				"ash",
				"bladestorm"
			],
			group: "memes-warframe",
			memberName: "ash",
			description: "Ash"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439503102484152320/ash.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
