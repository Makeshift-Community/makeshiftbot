const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_makeshift_arxna extends commando.Command {
	constructor(client) {
		super(client, {
			name: "arxna",
			aliases: [
				"arxna"
			],
			group: "memes-makeshift",
			memberName: "arxna",
			description: "-ARxNA-"
		});
	}

	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439495488128155658/arxna.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439931513534939151/arxna2.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};