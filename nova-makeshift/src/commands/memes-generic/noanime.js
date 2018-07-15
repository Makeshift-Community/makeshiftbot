const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_generic_noanime extends commando.Command {
	constructor(client) {
		super(client, {
			name: "noanime",
			aliases: [
				"japan",
				"animu",
				"anime",
				"weeaboos",
				"weeaboo",
				"weebs",
				"otaku",
				"otakus",
				"weeb",
				"noanime",
				"no_anime"
			],
			group: "memes-generic",
			memberName: "noanime",
			description: ""
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439494529863778304/noanime1.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439494615654072320/noanime2.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
