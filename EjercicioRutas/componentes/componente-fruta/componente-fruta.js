var app = angular.module('angularApp').
    component('componenteFruta', { 
        templateUrl: './componentes/componente-fruta/template-frutas.html',
        controller:  function FrutasController($http, $scope, $window){
            console.trace('FrutasController');

            // propiedades o variables
            ////////////////////////////////////////////////////////////////////
            $scope.Math = $window.Math;
            $scope.total = 0;
            $scope.columna = "";
            $scope.orden = "";
            $scope.flechaN = "fa-minus";
            $scope.flechaP = "fa-minus";
            $scope.frutas = [];
            $scope.visualizar = [];
            $scope.colores = [];
            $scope.nombre2e = [];
            $scope.totalG = 0;
            $scope.total3G = 0;
            $scope.itemInicial = 0;
            $scope.itemPag = 5;
            $scope.itemFinal = $scope.itemPag;
            $scope.totalItems = 0;           
            $scope.mensajeValidacion = "";
            $scope.ENDPOINT = "http://localhost:3000/frutas/";

            // eventos
            /////////////////////////////////////////////////////////////////////

            this.$onInit = function(){
            console.trace('iniciando con $onInit()');

                $http.get($scope.ENDPOINT).then(function(response){ // success antiguo
                    console.trace('peticion GET a %s data=%o', $scope.ENDPOINT, response);
                    $scope.frutas = response.data;
                    $scope.colores = response.data.map(elem => elem.color).filter((v,i,a)=>
                    {
                        return a.indexOf(v) ===i;
                    });
                    $scope.nombre2e = response.data.filter(e => e.precio >2).map(e => e.nombre);
                    $scope.totalG = response.data.map(e=>e.precio).reduce((pv,cv)=>pv+cv);
                    $scope.total3G = response.data.filter(e=>e.precio>3).map(e=>e.precio).reduce((pv,cv)=>pv+cv);

                    $scope.visualizar = $scope.frutas.slice($scope.itemInicial, $scope.itemFinal);
                    $scope.totalItems = $scope.frutas.length;
                    console.trace('totalItems= %o', $scope.totalItems);
                    $scope.nPag = Math.ceil($scope.totalItems/$scope.itemPag);
                    console.trace('numero de pag nPag= %o', $scope.nPag);                  
                    console.trace('visualiza pagination %o', $scope.visualizar);

                }, function(response){ // gestion de errores
                    console.warn('tenemos un ERROR response: %o', response);
                    $scope.mensajeValidacion = "ERROR de conexion con el WebService";
                });
            };


            // funciones
            //////////////////////////////////////////////////////////////////
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
            };
            // funciones para la paginacion
            $scope.paginacionSig = function(){
                $scope.itemInicial += $scope.itemPag;
                $scope.itemFinal += $scope.itemPag;
                $scope.visualizar = $scope.frutas.slice($scope.itemInicial, $scope.itemFinal);
            };

            $scope.paginacionAnt = function(){
                $scope.itemInicial -= $scope.itemPag;
                $scope.itemFinal -= $scope.itemPag;
                $scope.visualizar = $scope.frutas.slice($scope.itemInicial, $scope.itemFinal);

            };

            $scope.irPagina = function(inicial, final){
                $scope.itemInicial += inicial;
                $scope.itemFinal += final;
                $scope.visualizar = $scope.frutas.slice($scope.itemInicial, $scope.itemFinal);
            }

        } // end frutasCtrl
    }); 