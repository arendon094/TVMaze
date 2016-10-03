angular.module('app', ['ngRoute', 'ngResource', 'search.controller', 'search.service', 'tvshow.controller', 'tvshow.service'])
	.filter('trustHTML', function($sce) {
    	return function(text) {
        	return $sce.trustAsHtml(text);
        };
  	})
	.config(['$routeProvider', '$locationProvider',
		function ($routeProvider, $locationProvider){
			$routeProvider
				.when('/', {
					templateUrl: 'views/search.html',
					controller: 'SearchController'
				})
				.when('/showinfo/:id', {
					templateUrl: 'views/tvshow.html',
					controller: 'TvShowController',
					resolve: {
						tvshow: function($route, TvShowService) {
							return TvShowService.get({ id: $route.current.params.id });
						}
					}
				})
				.otherwise({
          			redirectTo: '/'
        		});
			$locationProvider.html5Mode(true);
	}]);