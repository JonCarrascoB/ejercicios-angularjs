app.controller('pokemonDetalleController', ['$scope', '$http', '$routeParams',
                                      function($scope, $http, $routeParams){


    console.trace('pokemonDetalleController');    

    $scope.name = $routeParams.name;

    
    $scope.pokemon = [];
    $scope.ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
    $scope.url =  $scope.ENDPOINT + $scope.name;

    
    console.trace('iniciando con $onInit()');

    $http.get($scope.url).then(function(response){ // success antiguo
        console.trace('peticion GET a %s data=%o', $scope.url, response);
        $scope.pokemon = response.data;

    }, function(response){ // gestion de errores

        console.warn('tenemos un ERROR response: %o', response);
        $scope.mensajeValidacion = "ERROR de conexion con el WebService";
    });

}]);