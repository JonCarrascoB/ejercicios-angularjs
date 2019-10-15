app.controller( 'serviciosCtrl',['$scope', 
                                '$log', 
                                'servicioConstantes', 
                                'rectanguloService',
                                'rectangulo2Service',
                                function($scope, $log, servicioConstantes, rectanguloService, rectangulo2Service){

    console.trace('serviciosController');
    $log.info('serviciosController con $log');
    
    $scope.constantes = servicioConstantes;

    //usamos el servicio rectangulo
    $scope.alto = 3;
    $scope.ancho = 2;
    rectanguloService.setAncho($scope.ancho);
    rectanguloService.setAlto($scope.alto);

    $scope.area = rectanguloService.getArea();

    $scope.area2 = rectangulo2Service.getArea();
   

}]);