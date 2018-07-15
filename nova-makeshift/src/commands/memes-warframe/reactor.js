const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_reactor extends commando.Command {
	constructor(client) {
		super(client, {
			name: "reactor",
			aliases: [
				"reactor",
				"orokinreactor"
			],
			group: "memes-warframe",
			memberName: "reactor",
			description: "Reactor"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439745459112902667/reactor.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
