(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', '$timeout', function($scope,$http, $timeout){
  
  
    $scope.profesores = [];
    $scope.ocultar = false;

    // peticion http request mediante Ajax, es asincrona!!!
    console.debug('Llamada asincrona');

    $timeout(function(){

        $http.get("json/profesores.json").success(function(data){
            console.trace('response OK %o', data);
            $scope.profesores = data;
            $scope.ocultar = true;
        });

    }, 3000);

    
    console.debug('Seguimos ejecutando otras secuencias');

}]);





})();
