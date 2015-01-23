'use strict';

require.config({
	 baseUrl: "script/lib",
	 paths: {
		'angular' : 'angular/angular',
		'route'  : 'angular/angular-route',
		'videoApp' : 'videoApp',
	 },
	 shim: {
		'angular' : { 
			exports : 'angular'
		},
		'route': {
			deps: ['angular'],
			exports : 'route'
		}
	 },
	 waitSeconds: 10000,
	 callback: function() {
		 console.log("all dependencies loaded successfully!");
	 }
});

require([
	"videoApp"
]);