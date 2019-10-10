angular.
  module('tareasApp').  //nombre App
  component('listadoTareas', { 
    templateUrl: './components/template.lista-tareas.html',
    controller: function ListadoController($http, $scope) {

        console.trace('ListadoController');
        // propiedades o variables
        ////////////////////////////////////////////////////////////////////

        $scope.titulo = "Listado Tareas";
        $scope.tareas = [];
        $scope.nuevaTarea = "";
        $scope.mensajeValidacion = "";
        $scope.ENDPOINT = "http://localhost:3000/tareas/";

        // eventos
        /////////////////////////////////////////////////////////////////////

        this.$onInit = function(){
            console.trace('iniciando con $onInit()');

            $http.get($scope.ENDPOINT)
            .then(function(response){ // success antiguo
                console.trace('peticion GET a %s data=%o', $scope.ENDPOINT, response);
                $scope.tareas = response.data;

            }, function(response){ // gestion de errores
                console.warn('tenemos un ERROR response: %o', response);
                $scope.mensajeValidacion = "ERROR de conexion con el WebService";
            });
        };
        
        
        // funciones
        //////////////////////////////////////////////////////////////////
        $scope.crearTarea = function(){
            console.trace('click btn para crear nueva tarea: ' + $scope.nuevaTarea);

            let desc = $scope.nuevaTarea.trim();
            if(desc.length <= 2){
                $scope.mensajeValidacion = "Por favor escribe una descripcion más larga";
            } else {
                console.debug('llamada Post');
                $scope.mensajeValidacion = "";

                let data = {
                    "completada" : false,
                    "descripcion" : desc 
                };

                $http.post($scope.ENDPOINT, data).then(function(response){
                    console.trace('response OK data=%o', $scope.ENDPOINT, response);
                    
                }, function(response){ // gestion de errores
                    console.warn('tenemos un ERROR response: %o', response);
                });
            }
        } //end crear tarea

        $scope.eliminar = function(tarea){
            console.trace('eliminar tarea %o', tarea);
            let url = $scope.ENDPOINT + tarea.id;
            $http.delete(url).then(function(response){
                console.trace('response OK data=%o', $scope.ENDPOINT, response);
                
            }, function(response){ // gestion de errores
                console.warn('tenemos un ERROR response: %o', response);
            });
        }; //end eliminar tarea

        $scope.completarTarea = function(tarea){
            console.trace('modificar completada tarea %o', tarea);
            let url = $scope.ENDPOINT + tarea.id;
            
            let data = {
                "id":tarea.id,
                "completada" : !tarea.completada,
                "descripcion": tarea.descripcion
            }
            $http.put(url, data).then(function(response){
                console.trace('response OK data=%o', $scope.ENDPOINT, response);
                
            }, function(response){ // gestion de errores
                console.warn('tenemos un ERROR response: %o', response);
            }); 


        }; // end completar tarea

        $scope.modificarDescripcion = function(tarea){
            console.trace('modificar completada tarea %o', tarea);
            
            // ventana pop-up de confirmacion
            if (confirm ('¿Estas seguro que quieres modificar?')){
                let url = $scope.ENDPOINT + tarea.id;
                let data = {
                    "descripcion": tarea.descripcion
                }
    
                $http.patch(url, data).then(function(response){
                    console.trace('response OK data=%o', $scope.ENDPOINT, response);
                    
                }, function(response){ // gestion de errores
                    console.warn('tenemos un ERROR response: %o', response);
                }); 
            }
            
        }; // end modificar tarea


        /*$scope.editarTarea = function(tarea){
            console.trace('modificar completada tarea %o', tarea);
            let url = $scope.ENDPOINT + tarea.id;
            $scope.descripcionEditar = tarea.descripcion;
            
            let data = {
                "id":tarea.id,
                "completada" : !tarea.completada,
                "descripcion": tarea.descripcion
            }*/


            /*$http.put(url, data).then(function(response){
                console.trace('response OK data=%o', $scope.ENDPOINT, response);
                
            }, function(response){ // gestion de errores
                console.warn('tenemos un ERROR response: %o', response);
            }); 


        }; // end editar tarea*/
      
    }
});
