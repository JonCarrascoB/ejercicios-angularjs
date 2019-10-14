app.controller( 'promesaController',['$scope','$http', '$q', '$timeout', function($scope, $http, $q, $timeout){

    console.trace('promesaController');
    $scope.titulo = "Promesas - Ejercicio";
    $scope.resultado1 = "Sumando.....";
    $scope.resultado2 = "Sumando.....";
    $scope.resultadoTotal = "Esperando.....";


    /**
     * funcion Asincrona que retorna una promesa
     * usamos $q para el asincronismo, ya que javaScript es sincrona
     * 
     * @param numero1: entero a sumarle uno.
     * @param numero2: entero para sumar
     * @param fallo: boolean para hacer que funcione o falle la promesa
     * @param espera: tiempo en milisegundos para retardar la funcion
     * 
     */
    $scope.sumar = function(numero1, numero2, fallo, espera){
        console.trace('sumar');
        var q = $q.defer();
        $timeout (function(){
            if(!fallo){
                let num = numero1 + numero2;
                q.resolve (num); // Se cumple o resuelve la promesa => then
            }else {
                q.reject('lo sentimos pero fallo'); //falla
            }
        }, espera);
        
        return q.promise
    } // end sumar

    // vamos a llamar a la funcion asincrona
    $scope.p1 = $scope.sumar(2, 3, false, 2000);
    $scope.p1.then(function(result){
        console.debug('promesa1 cumplida, resultado %o', result);
        $scope.resultado1 = result;
    }).catch(function(result){
        console.debug('promesa1 no cumplida, resultado %o', result);
        $scope.resultado1 = result;
    });

    //volvemos a llamar
    $scope.p2 = $scope.sumar(5, 5, false, 5000);
    $scope.p2.then(function(result){
        console.debug('promesa2 cumplida, resultado %o', result);
        $scope.resultado2 = result;
    }).catch(function(result){
        console.debug('promesa2 no cumplida, resultado %o', result);
        $scope.resultado2 = result;
    });

    // esperar a que se cumplan las dos promesas, para sumar las dos
    $q.all( [$scope.p1 , $scope.p2] ).then( function(){
        console.debug("Todas las promesas completadas");
        $scope.resultadoTotal = $scope.resultado1 + $scope.resultado2;

    }).catch(function (result) {
        console.debug("fallo alguna promesa");
    });    

}]);