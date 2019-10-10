var app = angular.module('componentesApp',[ ]);

app.controller('mainCtrl', ['$scope','$http', '$timeout', function($scope,$http, $timeout){
  
    $scope.loc = {};
    $scope.mostrar = true;
    $scope.SERVICE_URL = 'http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK';
    
    // peticion http request mediante Ajax, es asincrona!!!
    console.debug('Llamada asincrona');

    $scope.localizar = function(){
        $http.jsonp($scope.SERVICE_URL)
        .success(function(data){
            console.trace('Response Ok data = %o' + data);
            $scope.loc = data;
            $scope.mostrar = false;
            $scope.initMap();
        });
    }; //end localizar


    $scope.initMap = function() {
        var myLatLng = {lat: +$scope.loc.geoplugin_latitude, lng: +$scope.loc.geoplugin_longitude};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: $scope.loc.geoplugin_city
        });
      }

    console.debug('Seguimos ejecutando otras secuencias');

}]);

