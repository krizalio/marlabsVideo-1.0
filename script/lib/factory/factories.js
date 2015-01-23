define(['angular'], function(angular) {
	return angular.module("videoApp.Factories", [])
	.factory("APIHandler", function() {
		//according to input from view, data is formatted;
		var loadAPI = function(key, exec) {
			var result = "";
			gapi.client.setApiKey('AIzaSyCqDpXxB_V5lLOiKMHUFBvZdAs6aWdszWY');
			gapi.client.load('youtube', 'v3', function() {
				var result = '';
				var request = gapi.client.youtube.search.list({
					q : key,
					part: 'snippet',
					maxResults: 6
				}).execute(function(response) {
					if(response.result) {
						exec(response.result);
					}
				});
			})
		}
		return function(input, exec, scope) {
			if(input) {
				loadAPI(input, exec);
			};
			exec;
		}
	});
});