var app = angular.module ('angularApp.servicios', []);

app.factory('Personas', ['$http', '$q', '$scope', '$rootScope', function($http, $q, $scope, $rootScope){
    
    var personas = [
        {
          "edad": 35,
          "nombre": "Cabrera Haney"
        },
        {
          "edad": 26,
          "nombre": "Erica Morgan"
        },
        {
          "edad": 21,
          "nombre": "Traci Weeks"
        },
        {
          "edad": 35,
          "nombre": "Camille Kirk"
        },
        {
          "edad": 23,
          "nombre": "Palmer Rosario"
        }
      ];
      /*
    $scope.ENDPOINT = "http://localhost:3000/personas/";

    personas.cargar = function(){
        console.trace('cargar');
        var q = $q.defer();
    
        $http.get($scope.ENDPOINT).then(function(result){
            console.debug('promesa cumplida, resultado %o', result);
            q.resolve(result);

        }).catch(function(result){
            console.debug('promesa no cumplida, resultado %o', result);
            q.reject('ERROR al cargar');
            
        });
        return q.promise;
    }
    
    $rootScope.promise = personas.cargar();
    $rootScope.promise.then(function(result){
        personas = result;
    }, function(result){
        console.error(result);
    });
    */
    return personas;  
}]);