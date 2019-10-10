var app = angular.module('InicialApp', []);

app.controller('profesorCtrl', function($scope){

    // se instancian los valores de las variables
    $scope.editando = {};
    $scope.profesor = [
    {
        nombre: "Profesor Frink",
        clase: "Fisica Nucelar",
        img: "img/Frink.png",
        edad: 47,
        bio: "lorem ipsum"
    },
    {
        nombre: "Director Skinner",
        clase: "Vietnam",
        img: "img/Skinner.png",
        edad: 62,
        bio: "lorem ipsum"
    },
    {
        nombre: "Profesora Krabapappel",
        clase: "General",
        img: "img/Edna.png",
        edad: 45,
        bio: "lorem ipsum"
    }]

    // se crean las funciones
    $scope.editar = function(){
        console.trace('Se esta editando');
        angular.copy($scope.profesor[0], $scope.editando);
    }

    $scope.cancelar = function(){
        console.trace('Se estan borrando los campos');
        $scope.editando = {};
    }

    $scope.guardar = function(){
        console.trace('Se esta guardando');
        angular.copy($scope.editando, $scope.profesor[0]);
    }

});

