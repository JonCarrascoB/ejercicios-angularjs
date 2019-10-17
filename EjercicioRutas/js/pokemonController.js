app.controller('pokemonController', ['$scope', '$http',
                                      function($scope,$http){

    console.trace('pokemonController');
    $scope.titulo = "Pokemon Api";
    $scope.pokemons = [];
    $scope.pokeDetails = [];
    $scope.ENDPOINT = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10";
    $scope.url="";


    $http.get($scope.ENDPOINT).then(function(response){ // success antiguo
        console.trace('peticion GET a %s data=%o', $scope.ENDPOINT, response);
        $scope.pokemons = response.data;
          
    }, function(response){ // gestion de errores
        console.warn('tenemos un ERROR response: %o', response);
    });
     
    
    

/* Funciones */   

    

}]);