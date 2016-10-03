angular.module('tvshow.service', [])
	.factory('TvShowService', function ($resource){
		return $resource('/api/showinfo/:id');
	});