const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_warframe_zephyr extends commando.Command {
	constructor(client) {
		super(client, {
			name: "zephyr",
			aliases: [
				"zephyr",
				"shit"
			],
			group: "memes-warframe",
			memberName: "zephyr",
			description: "Zephyr"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439510445645365278/zephyr1.png"}}},
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439510559013077002/zephyr2.jpg"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
