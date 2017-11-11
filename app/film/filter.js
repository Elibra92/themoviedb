angular.module('app').filter('filtro_genere', function() {
    return function(films, genere) {
       if (genere == undefined) {
           return films;
       }      
        return films.filter(function(film) {
            console.log(film);
            return film.nuovo_generi.some(function(genere_film) {
                    return genere_film.id == genere.id;
                })
            
        })
    }
});