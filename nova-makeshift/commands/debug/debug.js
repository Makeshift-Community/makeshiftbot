const commando = require("discord.js-commando");

module.exports = class debug_debug extends commando.Command {
	constructor(client) {
		super(client, {
			name: "debug",
			aliases: [
				"debug"
			],
			group: "debug",
			memberName: "debug",
			description: "D E B U G",
			ownerOnly : true
		});
	}

	async run(msg, args) {
		msg.react("✅");
		return msg.channel.send(

		);
	}
};
