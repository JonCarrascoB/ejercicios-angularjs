app.controller('formController',['$scope', function($scope,){
    console.trace('formController');
    
    $scope.titulo = "Formularios";
    $scope.formData = {};
  
    $scope.guardarDatos = function(valido){
     
        console.log('Posteando....');
     
    };
  
  }]);