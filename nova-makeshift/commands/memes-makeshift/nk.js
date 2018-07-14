const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_makeshift_nk extends commando.Command {
	constructor(client) {
		super(client, {
			name: "nk",
			aliases: [
				"nk",
				"nkn1396",
				"enkay",
				"nkn"
			],
			group: "memes-makeshift",
			memberName: "nk",
			description: "NKN1396"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439496512012025858/nk1.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439496587027152917/nk2.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439496765255974942/nk3.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
