angularApp.controller('DetailsCtrl', ['$scope','$http','$routeParams', function($scope,$http,$routeParams){
	$http.get('json/artists.json')
	.success(function(data){
		$scope.artists = data;
		$scope.whichItem = $routeParams.itemId;
		console.log($scope.artists);
	})
	.error(function(status){
		$scope.error = "Artist Info could not be fetched" + status.Message;
		console.log($scope.error);
	});

	if($routeParams.itemId > 0){
		$scope.prevItem = Number($routeParams.itemId) - 1;
	}
	else{
		$scope.prevItem = $scope.artists.length - 1;
	}

	if($routeParams.itemId < $scope.artists.length - 1 ){
		$scope.nextItem = Number($routeParams.itemId) + 1;
	}
	else{
		$scope.nextItem = 0;
	}
}])