const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_makeshift_venn2 extends commando.Command {
	constructor(client) {
		super(client, {
			name: "venn2",
			aliases: [
				"venn2",
				"venn"
			],
			group: "memes-makeshift",
			memberName: "venn2",
			description: "Venn2"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439497341938958357/venn2.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};