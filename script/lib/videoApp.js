window.name = "NG_DEFER_BOOTSTRAP!";
require(['angular', 'gapi', 'controller/controllers', 'factory/factories', 'filter/filters'],
	function(angular, api, controllers, factories, filters) {
	angular.module("videoApp", 
		[
			"videoApp.Controllers",
			"videoApp.Factories",
			"videoApp.Filters"
		]
	);
	angular.element().ready(function() {
        angular.resumeBootstrap(["videoApp.Controllers", "videoApp.Factories", "videoApp.Filters"]);
    });
});