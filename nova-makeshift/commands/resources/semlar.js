const commando = require("discord.js-commando");

module.exports = class resources_semlar extends commando.Command {
	constructor(client) {
		super(client, {
			name: "semlar",
			aliases: [
				"semlar",
				"rivencalc"
			],
			group: "resources",
			memberName: "semlar",
			description: "semlar, a website with Riven-, Amp- and Zaw-calculators"
		});
	}

	async run(msg, args) {
		msg.react("✅");
		return msg.channel.send("<https://semlar.com/>");
	}
};