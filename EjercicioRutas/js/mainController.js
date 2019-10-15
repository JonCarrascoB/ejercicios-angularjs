
/**
 * Controlador principal
 */
app.controller('mainCtrl', ['$scope','$http', 'servicioConstantes', function($scope,$http,servicioConstantes){

    this.$onInit = function(){
        console.log('onInit mainCtrl');
        console.debug('constantes: %o', servicioConstantes);
        
        $scope.constantes = servicioConstantes;

        $scope.alerta = {};

        // check para saber si el servicio rest esta levantado
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
