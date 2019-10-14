app.controller( 'contratosController', function($scope, $http){

    $scope.contratos = [];
    $scope.tiposContratos = [];
    $scope.ejercicio1 = [];
    $scope.ejercicio2 = [];
    $scope.ejercicio3 = [];
    $scope.ejercicio4 = [];
    $scope.temporal = [];
    $scope.ENDPOINT = "http://localhost:3000/contratos/";

    this.$onInit = function(){
            console.trace('iniciando con $onInit()');

            $http.get($scope.ENDPOINT).then(function(response){ // success antiguo
                console.trace('peticion GET a %s data=%o', $scope.ENDPOINT, response);
                $scope.contratos = response.data;
                $scope.ejercicios();

            }, function(response){ // gestion de errores
                console.warn('tenemos un ERROR response: %o', response);
            });
    }; // end onInit

    $scope.ejercicios = function(){
        //1 filtro
        $scope.ejercicio1 = $scope.contratos.filter(e => e.TIPPRODUCT === 'KT');
        // productos sin repeticiones
        $scope.tiposContratos = $scope.contratos.map(e => e.TIPPRODUCT).filter((v,i,a)=>a.indexOf(v)===i);
        //2 filtro de map con concat
        $scope.ejercicio2 = $scope.contratos.map(e => {
             
            let cc = ((e.codContrat)?e.codContrat:0) +"-"+ ((e.digContrat)?e.digContrat:0);

                return {
                    "codigoContrato" : ((e.codContrat)?e.codContrat:0) +"-"+ ((e.digContrat)?e.digContrat:0),
                    "saldo": ((e.SALCONTRAT)?(e.SALCONTRAT/100):0)
                }
            }).filter(e=>{
                return e.codigoContrato != "" && e.saldo>0;
            });
            
        //3. filtro Acciones con "SITUACION"
        $scope.ejercicio3 = $scope.contratos.filter((v) => {

            if (v.ACCIONES != undefined){
                let result = v.ACCIONES.filter(e => e.clave == "SITUACION");
                if (result.length === 1){
                    return true;
                }else {
                    return false;
                }
            } else {
                return false;
            }
        });

        //4. map y spread
        $scope.temporal = $scope.contratos.filter(e => e.ACCIONES != "" && e.ACCIONES != null);
        $scope.ejercicio4 = $scope.temporal.map(e => e.ACCIONES).filter((v,i,a)=> {

           /* var uniq = [...new Set(temporal.map(({e}) => e.clave))].map(e => temporal.find(({e}) => e.clave == e));	
            console.log(uniq) */
            if(!$scope.temporal.titulo && !$scope.temporal.clave){
                return a.indexOf(v)===i;
            }
           
            
           
            /*
            var test = [
                {id: 1, PlaceRef: "*00011", Component: "BATH", SubLocCode: "BAT", BarCode: ""},
                {id: 2, PlaceRef: "*00022", Component: "BAXI10R", SubLocCode: "KIT", BarCode:""},
                {id: 1, PlaceRef: "*00011", Component: "BATH", SubLocCode: "BAT", BarCode: ""},
                {id: 3, PlaceRef: "*00011", Component: "ANR190", SubLocCode: "B1", BarCode: ""}
              ]*/
             
              

        });
        
        
    };

}); // end contratosCtrl