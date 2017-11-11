angular.module('app').filter('filtro_genere', function() {
    return function(films, genere) {
       if (genere == "Cerca per genere") {
           return films;
       }      
        return films.filter(function(film) {
            console.log(film);
            return film.nuovo_generi.some(function(genere_film) {
                console.log(genere);
                    return genere_film.name == genere;
                })
            
        })
    }
});


    // if (ingrediente == 'Tutte le pizze') return pizze;
   
 