var app = angular.module('angularApp', [ 'ngRoute', 'ngSanitize']);

/**
* Servicio para Constantes
*/
app.constant("servicioConstantes", {"titulo": "Angular JS",
                                        "idioma": "es-ES",
                                        "version": "1.0",
                                        "autor": "Jon Carrasco",
                                        "gitHub": "https://github.com/JonCarrascoB/ejercicios-angularjs"
                                        }
);

/**
* Providers
*/

app.service("cancionProvider", CancionProvider);

/**
* Servicio para values
*/

app.value("tamanyoInicialRectangulo",{
    ancho:5,
    alto:6
});

/**
* Ejemplo Servicio a traves de una clase
*/
//Clase rectangulo y rectangulo
function Rectangulo() {
    this.ancho=0;
    this.alto=0;

    this.setAncho=function(ancho) {
        this.ancho=ancho;
    }

    this.setAlto=function(alto) {
        this.alto=alto;
    }  

    this.getArea=function() {
        return this.ancho * this.alto;
    }
}

function Rectangulo2(tamanyoInicial) {
    this.ancho=tamanyoInicial.ancho;
    this.alto=tamanyoInicial.alto;

    this.setAncho=function(ancho) {
        this.ancho=ancho;
    }

    this.setAlto=function(alto) {
        this.alto=alto;
    }  

    this.getArea=function() {
        return this.ancho * this.alto;
    }
}

// definir el servicio
app.service("rectangulo2Service",['tamanyoInicialRectangulo',Rectangulo2]);
app.service("rectanguloService",Rectangulo);