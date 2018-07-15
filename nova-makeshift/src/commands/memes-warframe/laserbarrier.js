const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_barrier extends commando.Command {
	constructor(client) {
		super(client, {
			name: "barrier",
			aliases: [
				"barrier",
				"laserbarrier"
			],
			group: "memes-warframe",
			memberName: "barrier",
			description: "Laser barrier"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439754182673694720/laserbarrier.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
