angular.module('app').controller('nuovofilmCtrl', function($scope, FilmsSrv, $state, generi, film2) {
    $scope.generi = generi.data;
    if (film2 != null) {
        $scope.film = film2.data;
    }
    var genere = $scope.generi_selezionati = [];
    $scope.seleziona_genere = function(gen) {
                    var f= false;
        for (var i=0; i<genere.length; i++) {
            console.log(genere);
            if (genere[i] == gen) {
                return f=true;
            }
        }
        if (f == false) {
            $scope.generi_selezionati.push(gen);
        
        }
    }   
    //inserimento film 
    $scope.inserisci_film = function(film){
        debugger;
        if (film2 == null) {

        var ids = [];
        $scope.generi_selezionati.forEach(function(el) {
            ids.push(el.id);
        });
        var nuovo = {
            poster_path: "/"+ film.poster_path,
            video: film.video,
            title: film.title,
            genre_ids: ids,
            original_language : film.original_language,
            overview: film.overview,
            release_date : film.release_date
        }
        FilmsSrv.InsertOne(nuovo)
        .then(function(result) {
            $state.go('films');
            
        })
        .catch(function(err) {
            console.log(err);
        }) 
        }
        //fine inserimento film

        else {
       
        FilmsSrv.UpdateOne(film)
    
        .then(function(result) {
            console.log(result);
            // $scope.film = result.data;
            
        })
        .catch(function(err) {
            console.log(err);
        }) 
        }
    
    }

});