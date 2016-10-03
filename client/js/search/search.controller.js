angular.module('search.controller', [])
	.directive('resultPreview', function() {
		return {
			// restrict: 'EA',
			scope: {
				result: '='	
			},
			templateUrl: '../views/show.preview.html'
		};	
	})

	.controller('SearchController', function ($scope, SearchService) {
		$scope.search = function() {
			SearchService.query({ name: $scope.name }, function(response){
				$scope.tvshows = response;
			});
		};
	});