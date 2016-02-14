var angularApp = angular.module('angularApp',['ngRoute','ngAnimate']);

angularApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/list',{
		templateUrl: 'views/list.html',
		controller: 'ArtistsCtrl'
	})
	.when('/details/:itemId',{
		templateUrl: 'views/details.html',
		controller: 'DetailsCtrl'
	})
	.otherwise({
		redirectTo: '/list'
	});
}]);