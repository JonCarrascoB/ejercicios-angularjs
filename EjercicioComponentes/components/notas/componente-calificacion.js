angular.
module('componentesApp').  //nombre App
component('componenteCalificacion', { 
    templateUrl: './components/notas/template.html',
    bindings: {
        pnota: '@' //parametro de entrada desde index que no es un atributo
    },
    controller: function CalificacionController() {
        console.trace('CalificacionController');
        const NOTA_MAX = 10;
        const NOTA_MIN = 0;
        this.nota = 0;
        this.valor = 'Suspendido';

        // Evento quer se lanza cuando se inicia el controlador
        this.$onInit = function(){
            console.trace('CalificationController Init')
            this.nota = +this.pnota; // el + es para parseInt
            this.observacion();
        }

        this.sumar = function(){
            console.trace('suma click');
            if(this.nota<NOTA_MAX){
                this.nota++;  
            }
            this.observacion();
        };
        this.restar = function(){
            console.trace('resta click');
            if(this.nota>NOTA_MIN){
                this.nota--;
            }
            this.observacion();
        };
        
        this.observacion = function(){
            switch(this.nota){
                case 1:
                    this.valor = "Muy deficiente";
                    break;
                case 2:
                    this.valor = "Insuficiente";
                    break;
                case 3:
                    this.valor = "Deficiente";
                    break;
                case 4:
                    this.valor = "Necesita mejorar";
                    break;
                case 5:
                    this.valor = "Suficiente";
                    break;
                case 6:
                    this.valor = "Bien";
                    break;
                case 7:
                    this.valor = "Notable";
                    break;
                case 8:
                    this.valor = "Notable alto";
                    break;
                case 9:
                    this.valor = "Sobresaliente";
                    break;
                case 10:
                    this.valor = "Matricula de honor";
                    break;
                default:
                    this.valor = "Suspendido";
                    break;
            }
        };
    }

});