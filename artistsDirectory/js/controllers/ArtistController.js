angularApp.controller('ArtistsCtrl',['$scope','$http',function($scope,$http){
	$http.get('json/artists.json')
	.success(function(data){
		$scope.artists = data;
		console.log($scope.artists);
	})
	.error(function(status){
		$scope.error = "Artists could not be fetched" + status.Message;
		console.log($scope.error);
	})
	$scope.artistOrder = 'name';
}]);