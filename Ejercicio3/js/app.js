/* Javascript para nuestra aplicacion */
var app = angular.module(
                            'fruteriaApp', // nombre de la App 
                            []             //para inyectar librerias
                        );
/* Controladores */

app.controller( 'frutasCtrl', function($scope){

    /* Propiedades */
    $scope.total = 0;
    $scope.columna = "";
    $scope.orden = "";
    $scope.flechaN = "fa-minus";
    $scope.flechaP = "fa-minus";
    $scope.frutasJson = { "fruta":[
        {
            "nombre" : "Manzana",
            "img" : "https://supermercado.eroski.es/images/2388676.jpg",
            "precio": 3.25,
            "cantidad": 0,
            "color": "rojo"
        },
        {
            "nombre" : "Pera",
            "img" : "https://supermercado.eroski.es/images/17210.jpg",
            "precio": 2.68,
            "cantidad": 0,
            "color": "verde"

        },
        {
            "nombre" : "Fresa",
            "img" : "https://supermercado.eroski.es/images/17640137.jpg",
            "precio": 6.98,
            "cantidad": 0,
            "color": "rojo"
        }
    ]};

    /* Funciones */
    $scope.sumar = function(fj){
        console.log("click suma: %o", fj);
        fj.cantidad++;
        
    };
    $scope.restar = function(fj){
        console.log("click restar: %o", fj);
        if(fj.cantidad>0){
            fj.cantidad--;
        }
        
    };
    $scope.comprar = function(fj){
        console.log("click comprar: %o", fj);
        $scope.total += (fj.precio * fj.cantidad);
        fj.cantidad = 0;
        
    };
    $scope.borrar = function(){
        console.log("click borra: %o");
        $scope.total = 0;
        
    };
    $scope.filtro = function(columna){
        console.log("click orden por: %o", columna);
        $scope.columna = columna;
        $scope.orden = !$scope.orden;
        if($scope.orden && columna == 'nombre'){
            $scope.flechaN = "fa-sort-alpha-up-alt";
        } else{
            $scope.flechaN = "fa-sort-alpha-down";
        }
        if($scope.orden && columna == 'precio'){
            $scope.flechaP = "fa-sort-numeric-down-alt";
        } else{
            $scope.flechaP = "fa-sort-numeric-up";
        }
    }


}); // end frutasCtrl