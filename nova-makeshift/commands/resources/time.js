const commando = require("discord.js-commando");
const moment = require("moment");

module.exports = class resources_time extends commando.Command {
	constructor(client) {
		super(client, {
			name: "time",
			aliases: [
				"time",
				"utc",
				"reset"
			],
			group: 'resources',
			memberName: "time",
			description: "Shows Warframe server time and time left until Warframe daily reset."
		});
	}

	async run(msg, args) {
		var timeNow = moment().utc();
		var out = 'Current time: **' + timeNow.format('HH:mm') + '** *UTC+0*.\n';
		out += '**';
		var unit = Math.floor(moment.duration(moment(timeNow).endOf('day').diff(timeNow)) / 60000);
		out += Math.floor(unit / 60);
		out += ':';
		unit = unit % 60;
		out += (unit < 10) ? ("0" + unit) : unit;
		out += '** left until 0:00 *UTC+0*.\n';
		msg.react("✅");
		return msg.channel.send(out + '*(Warframe server reset for daily tribute and raid rewards)*');
	}
};