const commando = require("discord.js-commando");

module.exports = class moderative_lock extends commando.Command {
	constructor(client) {
		super(client, {
			name: "warn",
			aliases: [
				"warn"
			],
			group: "moderative",
			memberName: "warn",
			description: "",
			guildOnly : true
		});
	}

	async run(msg, args) {
		//msg.react("✅");
		//return msg.channel.send("");
		return;
	}
};
