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
        },
        {
          "nombre": "Promesas",
          "url":"#!/promesa",
          "active": false,
          "icono": "fas fa-pray"
        },
        {
          "nombre": "Servicios",
          "url":"#!/servicios",
          "active": false,
          "icono": "fas fa-concierge-bell"
        },
        {
          "nombre": "Canciones",
          "url":"#!/canciones",
          "active": false,
          "icono": "fas fa-music"
        },
        {
          "nombre": "Formularios",
          "url":"#!/formularios",
          "active": false,
          "icono": "fab fa-wpforms"
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