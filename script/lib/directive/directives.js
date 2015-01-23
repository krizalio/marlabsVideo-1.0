define(['angular', 'filter/filters'], function(exampleApp, dayName) {
	return angular.module("exampleApp.Directives", [])
	.directive("highlight", function($filter) {
		var dayFilter = $filter("dayName");
		//directive defines behavior of the controller;
		//directives are free to use filters to manage view;
		return function($scope, element, attrs) {
			if(dayFilter($scope.day)==attrs["highlight"]) {
				element.css("color", "red");
			}
		}
	});
});