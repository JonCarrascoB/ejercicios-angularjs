
app.controller( 'cancionesController',['$scope','$http', 'cancionProvider', function($scope, $http, cancionProvider){

    console.trace('cancionesController');
      
    // variables del scope del controlador
    $scope.titulo = "Ejercicio CRUD contra Servicio Rest en Java";
    $scope.flechaN = "fa-minus";
    $scope.flechaId = "fa-minus";
    $scope.nombre= "";
    $scope.cancion = {};
    $scope.canciones = [];
    $scope.cancionEditar = [];
  
    // Eventos
    this.$onInit = function(){
        console.trace('cancionesController onInit'); 
  
        $scope.refrescar();
  
      };  // onInit  
  
  
      // funciones
  
      $scope.refrescar = function(){
        console.trace('refresca o actualiza la lista de canciones');
        let promesa = cancionProvider.listar();           
          promesa.then( 
              response=>{
                  console.debug('Llamada Rest OK %o', response);
                  $scope.canciones = response.data;
              },
              response=>{
                  console.warn('Llamada Rest ERROR %o', response);
              }
          );
      }; // refrescar
  
      $scope.nuevaCancion = function(nombre){
        console.trace('click nueva cancion nombre: %o', nombre);
        if(nombre == undefined || nombre == ""){
          $scope.mensaje = {
            "texto": "<strong>Error</strong>, el nombre insertado esta vacio",
            "clase": "danger"
          };
        } else {
          let p = cancionProvider.crear(nombre);
          p.then(
            response=>{
              console.debug('Llamada Rest OK %o', response);
              $scope.mensaje = {
                "texto": "<strong>OK</strong>, el nombre ha sido guardado con exito",
                "clase": "success"
              }
              $scope.refrescar();
              $scope.nombre = "";
            },
            response=>{
              console.warn('Llamada Rest ERROR %o', response);
              $scope.mensaje = {
                "texto": "<strong>Error</strong>, el nombre insertado esta duplicado o formato no valido",
                "clase": "warning"
              }
            }
          );
        }
        
      }; // nueva cancion                                   
      
      $scope.borrarCancion = function(id){
        console.trace('click para eliminar cancion por id %o', id);
        if(confirm('¿Estas seguro?')){
          let p2 = cancionProvider.eliminar(id);
          p2.then(
            response=>{
              console.debug('Llamada Rest OK %o', response);
              $scope.mensaje = {
                "texto": "<strong>OK</strong>, la cancion ha sido eliminada con exito",
                "clase": "success"
              }
              $scope.refrescar();
            },
            response=>{
              console.warn('Llamada Rest ERROR %o', response);
              $scope.mensaje = {
                "texto": "<strong>Error</strong>, no se ha podido eliminar la cancion",
                "clase": "danger"
              }
            }
          );
        } // confirm
        
      }; // eliminar
  
      $scope.detalleCancion = function(cancion){
        console.trace('click detalle cancion: %o',cancion);
        $scope.cancionEditar = cancion;
  
      }; // detalle
      
      $scope.modificarCancion = function(){
        console.trace('click modificar cancion %o', $scope.cancionEditar);
  
        let p4 = cancionProvider.modificar($scope.cancionEditar);
        p4.then(
          response=>{
            console.debug('Llamada Rest OK %o', response);
            $scope.mensaje = {
              "texto": "<strong>OK</strong>, la cancion ha sido modificada con exito",
              "clase": "success"
            }
            $scope.refrescar();
            $scope.nombre = "";
          },
          response=>{
            console.warn('Llamada Rest ERROR %o', response);
            $scope.mensaje = {
              "texto": "<strong>Error</strong>, no se ha podido modificar la cancion",
              "clase": "danger"
            }
          }
        );
      }; // modificar
  
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
    }; // filtro ordenacion
  
  }]);