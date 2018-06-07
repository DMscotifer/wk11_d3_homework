var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		result = [];
		arr.forEach(function(number) {
			result.push(number*number);
		})
		return result;
	},

	sum: function (arr) {
		let result = 0;
		arr.forEach(function(number){
			result += number;
		})
		return result;
	},

	findDuplicates: function (arr) {
			var results = [];
			arr.filter(function(number, index) {
				if (arr.indexOf(number) !== index && results.includes(number) === false) {
					results.push(number);
				}
			});
			return results;
	},

	removeAndClone: function (arr, valueToRemove) {
		let results = [];
				arr.forEach(function(number){
					if (valueToRemove !== arr[number]){
							if (results.includes(arr[number]) === false){
								results.push(arr[number]);
							}
				    }
				})
				return results;
		},

	findIndexesOf: function (arr, itemToFind) {

	},

	sumOfAllEvenNumbersSquared: function (arr) {
		let result = 0;
		let square;
			arr.forEach(function(number) {
				if (number % 2 === 0) {
					squared = number*number;
					result += squared;
				}
			})
			return result;
	}

}

module.exports = arrayTasks
