/* Javascript para nuestra aplicacion */
var app = angular.module(
                            'profesorApp', // nombre de la App 
                            []             //para inyectar librerias
                        );
/* Controladores */
app.controller(
    'profesorCtrl', //nombre del controlador
    function($scope, $timeout){  // la programacion del controlador

        //propiedades del modelo
        $scope.esVisible = false;
        $scope.animacion = "animated fadeInUp";
        $scope.editando = {};
        $scope.profesor = {
            nombre: "Juan Carlos Pineda",
            bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
            edad: 47,
            foto: "images/juancarlos.jpg"
        };
    

        // funciones
        $scope.editar = function(){
            console.trace('click boton editar');
            $scope.esVisible = true;
            $scope.animacion = "animated fadeInUp";
            angular.copy($scope.profesor, $scope.editando);   
        }

        $scope.cancelar = function(){
            console.trace('click boton cancelar');
            $scope.editando = {};
            $scope.animacion = "animated fadeOutDown";

            $timeout(function(){
                console.debug('esVisible = false');
                $scope.esVisible = false;
            }, 1000);
        }

        $scope.guardar = function(){
            console.trace('click boton guardar');
            $scope.animacion = "animated fadeOutDown";

            $timeout(function(){
                console.debug('esVisible = false');
                angular.copy($scope.editando, $scope.profesor);
                $scope.esVisible = false;
            }, 1000); 
        }
    }
); //end profesorCtrl

app.controller(
    'videoCtrl', //nombre del controlador
    function($scope,$timeout){  // la programacion del controlador

        //variable del modelo
        $scope.animacion = "";
        $scope.video = {
            id: "1",
            titulo: "Fary",
            codigo: "NFkI-zxZlHo",
            usuario: {
                id: 22,
                nombre: "Ramoncin"
            },
            categoria: {
                id: 3,
                nombre: "Musica"
            },
            likes: 5
        }

        $scope.sumarLikes = function(){
            console.trace('click boton like');
            $scope.animacion = "animated pulse";
            $scope.video.likes++;
 
            $timeout(function(){
                 $scope.animacion = "";
            }, 1000);
        }
    }
); //end videoCtrl

/* funcion para realizar el ng-repeat en el index */
app.controller( 'frutasCtrl', function($scope){

    $scope.frutas = ["Manzana", "Pera", "Kiwi", "Pomelo", "Sandia"];
    $scope.frutaSeleccionada = "";
    $scope.frutasJson = { "fruta":[
        {
            "nombre" : "Manzana",
            "color" : "Rojo"
        },
        {
            "nombre" : "Maracuya",
            "color" : "Lima"
        },
        {
            "nombre" : "Kiwi",
            "color" : "Verde"
        }
    ]};

    $scope.seleccionado = function( fruta ){
        console.log('click ' + fruta);
        $scope.frutaSeleccionada = fruta;        
    }


}); // end frutasCtrl