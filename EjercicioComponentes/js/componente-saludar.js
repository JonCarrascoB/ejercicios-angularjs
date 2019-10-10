angular.
  module('componentesApp').  //nombre App
  component('saludoUsuario', { // nombre componente => para usarlo como <saludo-usuario></saludo-usuario>
    template: 'Hola, {{$ctrl.user}}!',
    controller: function SaludoUsuarioController() {
      this.user = 'Mundo';
    }
  });