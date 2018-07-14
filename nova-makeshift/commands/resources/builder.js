const commando = require("discord.js-commando");

module.exports = class resources_builder extends commando.Command {
	constructor(client) {
		super(client, {
			name: "builder",
			aliases: [
				"builder",
				"builds",
				"warframe-builder",
				"wf-builder",
				"distantobserver",
				"distant-observer",
				"observer"
			],
			group: "resources",
			memberName: "builder",
			description: "Warframe builds"
		});
	}

	async run(msg, args) {
		var out = 
		"**Builds:**\n" +
		"Warframe builder:\n" +
		"*<http://warframe-builder.com/>*\n" +
		"distant Observer YouTube channel:\n" +
		"*<https://www.youtube.com/channel/UC13043Ga8_N3kItV22oHazQ>*";
		msg.react("✅");
		return msg.channel.send(out);
	}
};