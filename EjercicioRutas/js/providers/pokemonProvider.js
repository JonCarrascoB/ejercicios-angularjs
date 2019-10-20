function PokemonProvider ($http, $q){
    
    console.log('PokemonProvider');
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000";

    /**
     * Conseguimos todos los pokemos, sincronizando varias llamadas a la API
     * 
     * @return promise
     * 
     */
    this.listar = function(){
        console.log('pokemonProvider listar'+ ENDPOINT);
        let pokemons = [];
        let promesas = [];
        let q = $q.defer();

        console.log("1º llamada asincrona, para conseguir los nombres y url");
        $http.get(ENDPOINT).then(
            response => {

            //por cada pokemon, realizar una nueva llamada asincrona
            let resultados = response.data.results;
            
            resultados.forEach(pokemon =>{
                console.log("... llamada asincrona para " + pokemon.url);
                let p = $http.get(pokemon.url);
                promesas.push(p); // guardar promesa en array para luego sincronizar

                p.then( response =>{    
                    // si la promesa se cumple, guardar pokemon en array 
                    // guardamos solo los datos, no la response completa           
                    pokemons.push(response.data);
                  }
                  //si falla no hacemos nada
                );
            }); // foreach
        },
        response => {
          q.reject('Error, igual esta caida la API de Pokemnon %o', response); 
        }
      )
        //fin 1º llamada asincrona

        // Debemos sincronizar todas las promesas dentro de la 1º llamada Asincrona
        // podeis comentar estas lineas y por la consola de chrome se ven las peticiones HXR en pestaña NETWORKS
        // pero como no esperamos a que se cumplan todas, no se veran los datos por pantalla
      
      $q.all(promesas).then(
        response =>  { q.resolve( pokemons ) } , // resolvemos y retornamos el array con pokemos
        response =>  { q.reject('Lo sentimos al unit todos los pokemos!!! %o', response) }
      );
      
      return q.promise;
  
    } // listar

    /**
     * funcion para los detalles de cada pokemon
     */
    const ENDPOINTDET = "https://pokeapi.co/api/v2/pokemon/";
    
    this.detallar = function(name){
        let url =  ENDPOINTDET + name;
        let pokemon = {};
        let q = $q.defer();

        let p = $http.get(url);
        p.then(
            response =>{ // success antiguo
                console.trace('peticion GET a %s data=%o', url, response);
                pokemon = response.data;
                q.resolve(pokemon);
    
            }, response => { // gestion de errores
                console.warn('tenemos un ERROR response: %o', response);
                q.reject('Lo sentimod, la Api ha fallado');
            }
        );
        return q.promise;
    } // detalle de pokemon

}