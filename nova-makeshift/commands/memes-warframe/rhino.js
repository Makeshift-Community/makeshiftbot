const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_rhino extends commando.Command {
	constructor(client) {
		super(client, {
			name: "rhino",
			aliases: [
				"rhino"
			],
			group: "memes-warframe",
			memberName: "rhino",
			description: "Rhino"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439744908501188618/rhino.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
