app.controller('formuController', ['$scope', 'servicioConstantes',
                                      function($scope, servicioConstantes){


    console.trace('formController');    

    $scope.titulo = "Formularios";


    $scope.formData = {};
    /*
    $scope.formData = {
        "email" : servicioConstantes.email,
        "nombre" : servicioConstantes.autor
    };*/


    $scope.postear = ()=>{
        console.trace('formulario sumitado %o', $scope.formData );
    }

    $scope.changeStiles = (form)=>{
        console.trace('formulario de la vista %o', form );
    }

}]);