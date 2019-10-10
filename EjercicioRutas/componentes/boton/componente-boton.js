angular.
  module('angularApp').  //nombre App
  component('componenteBoton', { 
    templateUrl: './componentes/boton/template.html',
    controller: function BotonController() {
      console.trace('BotonController');
      this.titulo = 'Pulsa el boton';
      this.contador = 0;

      this.sumar = function(){
        console.trace('suma click');
        this.contador++;
      };
    }
  });