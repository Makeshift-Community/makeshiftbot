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
		var out = "";
		out += '**';
		var minutesUntilReset = Math.floor(moment.duration(moment(timeNow).endOf('day').diff(timeNow)) / 60000);
		var minutesWithoutHours = minutesUntilReset % 60;
		return msg.channel.send(
			`Current time: **${timeNow.format('HH:mm')}** *(UTC+0)*.`, {
			embed:{
				fields:[
					{
						name:"New sorties in",
						value:"DE tied this to their regional time instead of a timezone. This is literally a pain to program."
					},
					{
						name:"Daily reset in",
						value:`${Math.floor(minutesUntilReset/60)}:${(minutesWithoutHours<10)?"0":""}${minutesWithoutHours}`
					}
				]
			}
		});
	}
};
