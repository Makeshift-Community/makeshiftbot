const commando = require("discord.js-commando");

module.exports = class other_restart extends commando.Command {
	constructor(client) {
		super(client, {
			name: "restart",
			aliases: [
				"restart"
			],
			group: "other",
			memberName: "restart",
			description: "Restarts a part of Nova",
			ownerOnly : true
		});
	}

	async run(msg, args) {
		if(args.toLowerCase() == "nova-music"){
			msg.react("🎶")
			console.log("Bot restarted by user " + msg.author.tag);
			process.exit(1);
		}
		return;
	}
};
