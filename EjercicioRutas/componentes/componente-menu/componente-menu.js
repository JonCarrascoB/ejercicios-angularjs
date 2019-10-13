angular.
  module('angularApp').  //nombre App
  component('componenteMenu', { 
    templateUrl: './componentes/componente-menu/menu.html',
    controller: function MenuController($scope) {
      console.trace('MenuController');

      $scope.rutas = [
        {
          "nombre": "Inicio",
          "url":"#!/",
          "active": true,
          "icono": "fas fa-home"
        },
        {
          "nombre": "Frutas",
          "url":"#!/frutas",
          "active": false,
          "icono": "fas fa-pepper-hot"
        },
        {
          "nombre": "Alumno",
          "url":"#!/alumnos",
          "active": false,
          "icono": "fas fa-user-graduate"
        },
        {
          "nombre": "Componente",
          "url":"#!/componente",
          "active": false,
          "icono": "fas fa-cogs"
        },
        {
          "nombre": "Creditos",
          "url":"#!/creditos",
          "active": false,
          "icono": "fab fa-creative-commons"
        },
        {
          "nombre": "Filter, Map, Reduce",
          "url":"#!/progFuncional",
          "active": false,
          "icono": "fas fa-filter"
        }
      ];
    
      $scope.cambiarActivo = function(ruta){
        console.trace('click cambiar activo %o', ruta);
        // desactivar activo a todas las rutas
        $scope.rutas.forEach(element => {
          element.active = false;
        });
        // activar solo la que hacemos click
        ruta.active = true;
      }
      
    } // end MenuController
  });