const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_ok extends commando.Command {
	constructor(client) {
		super(client, {
			name: "ok",
			aliases: [
				"ok",
				"okhand",
				"ok_hand",
				"novaok",
				"nova_ok",
				"okay"
			],
			group: "memes-warframe",
			memberName: "ok",
			description: "OK"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439744218915799040/ok_hand.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
