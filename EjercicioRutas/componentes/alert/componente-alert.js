angular.
  module('angularApp').  //nombre App
  component('componenteAlert', { 
    templateUrl: './componentes/alert/template-alert.html',
    bindings:{
        clase: '@',
        texto: '@'
    },
    controller: function AlertController() {
        console.trace('AlertController');

        this.$onInit = function(){
            console.trace('AlertController onInit');
        }; // end onInit
        this.$onChange = function(){
            console.trace('AlertController onChanged');
        }
    }

  });