// var app = angular.module( "app", [ ] );
/**
 * Configuracion de las rutas de App
 * @see componente/menu/
 */
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'parciales/home.html'
    })
    .when('/alumnos',{
      templateUrl: 'parciales/alumnos.html'
    })
    .when('/componente',{
        templateUrl: 'parciales/componente.html'
    })
    .when('/componente2',{
      template: '<componente-boton></componente-boton>'
    })
    .when('/frutas',{
        template: '<componente-fruta></componente-fruta>'
    })
    .when('/creditos',{
      templateUrl: 'parciales/creditos.html'
    })
    .otherwise({
      redirectTo: '/'
    })

})
