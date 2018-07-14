const commando = require("discord.js-commando");
const selectRandomly = require("./../../../modules/utils/selectRandomly");

module.exports = class memes_warframe_zarr extends commando.Command {
	constructor(client) {
		super(client, {
			name: "zarr",
			aliases: [
				"zarr"
			],
			group: "memes-warframe",
			memberName: "zarr",
			description: "Zarr"
		});
	}
	
	async run(msg, args) {
		var options = [
			{embed: {image: {url: "https://cdn.discordapp.com/attachments/437703489347649539/439510352649256970/zarr.png"}}}
		];
		msg.react("✅");
		return msg.channel.send(selectRandomly(options, args));
	}
};
