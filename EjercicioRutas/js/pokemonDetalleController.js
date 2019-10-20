app.controller('pokemonDetalleController', ['$scope', '$http', '$routeParams', 'pokemonProvider',
                                      function($scope, $http, $routeParams, pokemonProvider){

    console.trace('pokemonDetalleController');    

    $scope.name = $routeParams.name; // obtenemos el nombre del pokemon por el route
    $scope.pokemon = {};
    
    // pedimos al pokemonProvider el detalle del pokemon
    pokemonProvider.detallar($scope.name).then( data => $scope.pokemon = data );

}]);