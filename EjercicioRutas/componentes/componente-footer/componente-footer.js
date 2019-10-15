angular.
  module('angularApp').  //nombre App
  component('componenteFooter', { 
    templateUrl: './componentes/componente-footer/footer.html',
    controller: function FooterController($scope, servicioConstantes) {
      console.trace('FooterController');

      $scope.constantes = servicioConstantes;
      
      
    } // end MenuController
  });