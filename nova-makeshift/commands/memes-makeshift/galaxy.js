const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_makeshift_galaxy extends commando.Command {
	constructor(client) {
		super(client, {
			name: "galaxy",
			aliases: [
				"galaxy"
			],
			group: "memes-makeshift",
			memberName: "galaxy",
			description: "Galaxy"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439709445384044544/galaxy1.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439496112387391498/galaxy2.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439496195610640384/galaxy3.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
