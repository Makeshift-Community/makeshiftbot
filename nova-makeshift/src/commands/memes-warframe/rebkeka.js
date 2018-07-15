const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_rebkeka extends commando.Command {
	constructor(client) {
		super(client, {
			name: "rebkeka",
			aliases: [
				"rebkeka",
				"kek",
				"rebecca",
				"derebecca",
				"[de]rebecca"
			],
			group: "memes-warframe",
			memberName: "rebkeka",
			description: "[DE]Rebecca"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439508819794460672/rebkeka.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
