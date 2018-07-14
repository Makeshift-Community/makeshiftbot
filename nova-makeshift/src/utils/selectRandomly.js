/**
 * Calls an item from an array. If an invalid or no index is specified a random item gets called instead.
 * @param {Object[]} options An array of options of which one will be returned.
 * @param {Number} choice The index of the array to return from.
 * @return {Object} The object returned from the specified options.
 */
module.exports = function (options, choice){
	if(options[choice - 1]){
		return options[(choice - 1)];
	}
	else{
		return options[(Math.floor(Math.random() * options.length))];
	}
}
