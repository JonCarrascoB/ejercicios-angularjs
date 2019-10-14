var app = angular.module ('angularApp.controladores', []);

app.controller( 'personasCtrl',['$scope', 'Personas', function($scope, Personas){

    $scope.personas = Personas;

}]);