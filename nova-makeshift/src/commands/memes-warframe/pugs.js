const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_pugs extends commando.Command {
	constructor(client) {
		super(client, {
			name: "pugs",
			aliases: [
				"pugs",
				"pubs"
			],
			group: "memes-warframe",
			memberName: "pugs",
			description: "Other players"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508727893065740/pugs1.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508770595274759/pugs2.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
