const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_exilus extends commando.Command {
	constructor(client) {
		super(client, {
			name: "exilus",
			aliases: [
				"exilus",
				"exilusadapter",
				"tomato"
			],
			group: "memes-warframe",
			memberName: "exilus",
			description: "Exilus Adapter"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439743337587671040/exilus.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
