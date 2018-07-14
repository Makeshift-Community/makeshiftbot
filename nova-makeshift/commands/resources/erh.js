const commando = require("discord.js-commando");

module.exports = class resources_erh extends commando.Command {
	constructor(client) {
		super(client, {
			name: "erh",
			aliases: [
				"eidolon",
				"eidolonrecruitmenthub",
				"eidolonrecruit",
				"recruitmenthub",
				"hub"
			],
			group: "resources",
			memberName: "erh",
			description: "Eidolon Recruitment Hub Discord"
		});
	}

	async run(msg, args) {
		msg.react("✅");
		return msg.channel.send("http://discord.gg/ytRaRq4");
	}
};