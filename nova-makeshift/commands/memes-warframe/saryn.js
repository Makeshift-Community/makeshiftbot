const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_saryn extends commando.Command {
	constructor(client) {
		super(client, {
			name: "saryn",
			aliases: [
				"saryn"
			],
			group: "memes-warframe",
			memberName: "saryn",
			description: "Saryn"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439509371354087445/saryn.jpg"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439742855330791425/saryn2.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};