const commando = require("discord.js-commando");
const selectRandomly = require("./../../utils/selectRandomly");

module.exports = class memes_discount extends commando.Command {
	constructor(client) {
		super(client, {
			name: "discount",
			aliases: [
				"75",
				"75%",
				"75off",
				"75%off",
				"wallet",
				"platinum",
				"discount"],
			group: "memes-warframe",
			memberName: "discount",
			description: "75% Platinum discount"
		});
	}

	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439503920398860290/discount.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
