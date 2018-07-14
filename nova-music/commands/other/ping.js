const commando = require("discord.js-commando");

module.exports = class other_heartbeat extends commando.Command {
	constructor(client) {
		super(client, {
			name: "heartbeat",
			aliases: [
				"heartbeat",
				"ping"
			],
			group: "other",
			memberName: "heartbeat",
			description: "Checks which parts of Nova are running"
		});
	}

	async run(msg, args) {
		msg.react("🎶");
		return;
	}
};
