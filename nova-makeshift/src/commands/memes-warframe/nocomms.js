const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_nocomms extends commando.Command {
	constructor(client) {
		super(client, {
			name: "nocomms",
			aliases: [
				"nocomms",
				"nocommraid",
				"chaosraid"
			],
			group: "memes-warframe",
			memberName: "nocomms",
			description: "Raids without voice chat"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508552827273216/nocomms.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
