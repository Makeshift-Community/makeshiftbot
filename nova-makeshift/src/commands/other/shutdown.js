const commando = require("discord.js-commando");

module.exports = class other_shutdown extends commando.Command {
	constructor(client) {
		super(client, {
			name: "shutdown",
			aliases: [
				"shutdown"
			],
			group: "other",
			memberName: "shutdown",
			description: "Shuts a part of Nova down",
			ownerOnly : true
		});
	}

	async run(msg, args) {
		if(args.toLowerCase() == "nova-makeshift"){
			console.log("Bot ended by user " + msg.author.tag);
			msg.react("💙")
			.then(function(){
				msg.client.destroy();
			});
		}
		return;
	}
};
