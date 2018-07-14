const commando = require("discord.js-commando");

module.exports = class debug_info extends commando.Command {
	constructor(client) {
		super(client, {
			name: "info",
			aliases: [
				"info"
			],
			group: 'debug',
			memberName: "info",
			description: 'Displays information about this bot.'
		});
	}

	async run(msg, args) {
		//var textInfo = "**nova-core.js v3.2**";
		var textInfo =
		"__**Nova v4.0**__\n" +
		//textInfo += "**" + jsonInfo.name + " version " + jsonInfo.version;
		//textInfo += "\nProgrammed by: " + client.users.get(botOwnerID);
		"A bot for the Makeshift clan Discord\n" +
		"Programmed by **NKN1396#3263**\n" +
		//textInfo += "\nHosted on: DigitalOcean (Ubuntu NodeJS 6.10.1 on 16.04)";
		//textInfo += "\nProgrammed in: Node.js (JavaScript)";
		/*textInfo += "\nDependencies used: ";
		for(dependency in jsonInfo.dependencies){
			textInfo += dependency + " ";
		}//*/
		"*Please issue the `/help` command if you wish to view a list of commands.*";
		msg.react("✅");
		return msg.channel.send(textInfo);
	}
};