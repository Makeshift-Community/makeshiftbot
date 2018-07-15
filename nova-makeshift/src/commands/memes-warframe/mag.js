const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_mag extends commando.Command {
	constructor(client) {
		super(client, {
			name: "mag",
			aliases: [
				"mag"
			],
			group: "memes-warframe",
			memberName: "mag",
			description: "Mag"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508271041347613/mag.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
