define(['angular'], function(angular) {
	return angular.module("videoApp.Controllers", [])
	//the days service is passed to the controller as data;
	//controllers accepts data and defines business logic;
	.controller("mainCtrl", function($scope, $filter, APIHandler) {
		$scope.hide = false;
		$scope.playVideo = false;
		//$scope.key = "";
		//$scope.message = "";
		//$scope.numVideo = "";
		$scope.setKey = function(input) {
			$scope.hide = input ? true : false;
			APIHandler(input, processData, $scope);
		}
		$scope.showVideoBig = function(item) {
			$scope.playVideo = true;
			$scope.videoURL = "http://www.youtube.com/v/" + item.id.videoId;
			angular.element(document.querySelector("#videoBox")).attr("data", $scope.videoURL);
		}
		var extractItem = $filter("extractItem");
		var processData = function(data) {
			$scope.$apply(function() {
				$scope.message = data.kind;
				$scope.numVideo = data.pageInfo.totalResults;
				$scope.showVideoLen = data.items.length;
				$scope.videos = extractItem(data);
				//$scope.test = $scope.videos[0].snippet.thumbnails.medium.url;
			});
			//console.log(JSON.stringify(data));
		}
	})
	/*.controller("mainCtrl", function($scope) {
		var OAU_CLT_ID = '179165861572-82m7cevfqnbdce2lh5rpjdbfilnvvhud.apps.googleusercontent.com';
		var OAU_SCOPE = [
			'https://www.googleapis.com/auth/youtube'
		];
		
		loadAPI();
	});*/
});