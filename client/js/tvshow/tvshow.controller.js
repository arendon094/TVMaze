angular.module('tvshow.controller', [])
	.controller('TvShowController', function ($scope, tvshow) {
// 		alert("I'm in the TvShow Controller");
		$scope.tvshow = tvshow;
	});