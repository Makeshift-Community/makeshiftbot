const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_amesha extends commando.Command {
	constructor(client) {
		super(client, {
			name: "amesha",
			aliases: [
				"amesha"
			],
			group: "memes-warframe",
			memberName: "amesha",
			description: "Amesha"
		});
	}
	
	async run(msg, args) {
		var options = [
			"https://youtu.be/sPXBqiMHzi4"
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
