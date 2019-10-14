var app = angular.module('angularApp',
    [ 
        'ngRoute', 
        'ngSanitize', 
        'angularApp.controladores',
        'angularApp.servicios'
    ]
);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

    this.$onInit = function(){
        console.log('onInit mainCtrl');

        $scope.alerta = {};

        // check para saver si el servicio rest esta levantado
        let url = 'http://localhost:3000/frutas';
        $http.get(url).then(function (result) {
            console.trace('servicio rest funcionando', result);
            $scope.alerta = {
                "texto": "<strong>Yujuuuu</strong> Esta funcionando el servicio rest",
                "clase": "success"
            };
        }).catch(function (response) {
            console.warn('servicio rest fallando %o', response);
            $scope.alerta = {
                "texto": "<strong>Ohhhh</strong> no funciona el servicio rest",
                "clase": "danger"
            };
        });
      
    };

}]);
