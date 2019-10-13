app.controller( 'frutasCtrl', function($scope, $http){

    /* Propiedades */

    $scope.frutas = [];
    $scope.ENDPOINT = "http://localhost:3000/frutas/";

    this.$onInit = function(){
            console.trace('iniciando con $onInit()');

            $http.get($scope.ENDPOINT).then(function(response){ // success antiguo
                console.trace('peticion GET a %s data=%o', $scope.ENDPOINT, response);
                $scope.frutas = response.data;

                $scope.filtro = response.data.filter(e => e.precio > 3).map(e => e.nombre);
                $scope.mapa = response.data.map(e => e.nombre);
                $scope.reducion = response.data.map(e=>e.precio).reduce((pv,cv)=>pv+cv);

            }, function(response){ // gestion de errores

                console.warn('tenemos un ERROR response: %o', response);
                $scope.mensajeValidacion = "ERROR de conexion con el WebService";
            });
    };

/* Funciones */




}); // end frutasCtrl