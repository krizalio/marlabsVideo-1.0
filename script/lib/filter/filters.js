define(['angular'], function(angular) {
	return angular.module("videoApp.Filters", [])
	.filter("extractItem", function() {
		var temp = [];
		//according to input from view, data is formatted;
		return function(input) {
			input.items.forEach(function(item, i) {
				temp.push(item);
			})
			return temp;
		}
	});
});