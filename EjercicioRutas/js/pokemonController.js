app.controller('pokemonController', ['$scope', '$http','pokemonProvider',
                                      function($scope,$http,pokemonProvider){

    console.trace('pokemonController');
    $scope.titulo = "pokemon api";
    $scope.mensaje = "hoy es viernes!!!";
    $scope.columna = "";
    $scope.orden = "";
    $scope.flechaN = "fa-minus";
    $scope.flechaP = "fa-minus";
    $scope.tipos = [];
    
    console.trace("pedimos a la API todos los pokemos");
    $scope.pokemons = {};
    pokemonProvider.listar().then( data => $scope.pokemons = data );

    // funciones
    $scope.filtro = function(columna){
        console.log("click orden por: %o", columna);
        $scope.columna = columna;
        $scope.orden = !$scope.orden;
        if($scope.orden && columna == 'name'){
            $scope.flechaN = "fa-sort-alpha-up-alt";
        } else{
            $scope.flechaN = "fa-sort-alpha-down";
        }
        if($scope.orden && columna == 'order'){
            $scope.flechaP = "fa-sort-numeric-down-alt";
        } else{
            $scope.flechaP = "fa-sort-numeric-up";
        }
    };
     
}]);