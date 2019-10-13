app.controller( 'contratosController', function($scope, $http){

    $scope.contratos = [];
    $scope.ENDPOINT = "http://localhost:3000/contratos/";

    this.$onInit = function(){
            console.trace('iniciando con $onInit()');

            $http.get($scope.ENDPOINT).then(function(response){ // success antiguo
                console.trace('peticion GET a %s data=%o', $scope.ENDPOINT, response);
                $scope.contratos = response.data;
                //1 filtro
                $scope.filtro1 = response.data.filter(e => e.TIPPRODUCT === 'KT');
                //2 filtro de map con concat
                $scope.contratoConcat = response.data.map(e => ((e.codContrat)?e.codContrat:0) + 
                                                            ((e.digContrat)?e.digContrat:0) +
                                                            ((e.SALCONTRAT)?(e.SALCONTRAT/100):0)
                                                            );
                //3. filtro Acciones con "SITUACION"
                $scope.accionContrato = response.data.filter(e => (e.ACCIONES = e.ACCIONES.filter(e => e.clave === 'SITUACION')));

                //4. map y spread



            }, function(response){ // gestion de errores
                console.warn('tenemos un ERROR response: %o', response);
            });
    }; // end onInit

}); // end contratosCtrl