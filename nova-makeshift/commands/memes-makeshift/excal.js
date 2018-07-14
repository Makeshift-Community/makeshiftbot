const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_makeshift_excal extends commando.Command {
	constructor(client) {
		super(client, {
			name: "excal",
			aliases: [
				"excal",
				"excalibur",
				"-exc4l1bur-",
				"exc4l1bur",
				"-excalibur-"
			],
			group: "memes-makeshift",
			memberName: "excal",
			description: "-EXC4L1BUR-"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439495770127728640/excal1.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439495839556042753/excal2.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};