define(['angular'], function(angular) {
	return angular.module("exampleApp.Services", [])
	//services provides data to the controller;
	.service("days", function(nowValue) {
		this.today = nowValue.getDay();
	});
});