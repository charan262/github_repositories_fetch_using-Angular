let myApp = angular.module('myModule', []);
myApp.controller('myController', function($scope,$http,$log) {
    
    $scope.getData = function() {
    	$http({
          method:'GET',
          url:'https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc'})
    	   .then(function(response) {
    	     $scope.employees=response.data.items;
    	     $log.info(response);
    	   });

    
        
    }
});
