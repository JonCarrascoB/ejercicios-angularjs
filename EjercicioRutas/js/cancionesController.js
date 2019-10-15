
app.controller( 'cancionesController',['$scope','$http', 'cancionProvider', function($scope, $http, cancionProvider){

    console.trace('cancionesController');
      
    // variables del scope del controlador
    $scope.titulo = "Ejercicio CRUD contra Servicio Rest en Java";
    $scope.flechaN = "fa-minus";
    $scope.flechaId = "fa-minus";
    $scope.canciones = [];
  
    // Eventos
    this.$onInit = function(){
        console.trace('cancionesController onInit'); 
  
          /*
          TODO ponerlo donde sea neceario
          cancionProvider.listar();
          cancionProvider.detalle(1);
          cancionProvider.eliminar(2);
          cancionProvider.crear("Mockito");
          cancionProvider.modificar(1,"Cambiada Cancion 1");
          */
  
        let promesa = cancionProvider.listar();           
        promesa.then( 
            response => {
                console.debug('Llamada Rest OK %o', response);
                $scope.canciones = response.data;
            },
            response => {
                console.warn('Llamada Rest ERROR %o', response);
            }
        );

        let promesa2 = cancionProvider.detalle();           
        promesa2.then( 
            response => {
                console.debug('Llamada Rest OK %o', response);
                $scope.canciones = response.data;
            },
            response => {
                console.warn('Llamada Rest ERROR %o', response);
            }
        );
  
  
  
    };    
  
  
      // funciones
    
      $scope.filtro = function(columna){
        console.log("click orden por: %o", columna);
        $scope.columna = columna;
        $scope.orden = !$scope.orden;
        if($scope.orden && columna == 'nombre'){
            $scope.flechaN = "fa-sort-alpha-up-alt";
        } else{
            $scope.flechaN = "fa-sort-alpha-down";
        }
        if($scope.orden && columna == 'id'){
            $scope.flechaId = "fa-sort-numeric-down-alt";
        } else{
            $scope.flechaId = "fa-sort-numeric-up";
        }
    };
                                        
}]);