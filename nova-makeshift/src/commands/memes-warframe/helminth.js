const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_helminth extends commando.Command {
	constructor(client) {
		super(client, {
			name: "helminth",
			aliases: [
				"helminth",
				"helminthcharger"
			],
			group: "memes-warframe",
			memberName: "helminth",
			description: "Helminth Charger"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439751976990015492/helminth.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
