const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_generic_ifunny extends commando.Command {
	constructor(client) {
		super(client, {
			name: "ifunny",
			aliases: [
				"ifunny",
				"watermark"
			],
			group: "memes-generic",
			memberName: "ifunny",
			description: "Response to something with an ifunny watermark"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439493996243320845/ifunny.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};