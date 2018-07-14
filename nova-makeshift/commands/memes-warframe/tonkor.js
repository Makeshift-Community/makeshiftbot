const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_tonkor extends commando.Command {
	constructor(client) {
		super(client, {
			name: "tonkor",
			aliases: [
				"tonkor",
				"nerf"
			],
			group: "memes-warframe",
			memberName: "tonkor",
			description: "Tonkor"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439509519761014784/tonkor.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
