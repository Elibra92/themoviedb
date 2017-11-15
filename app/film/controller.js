angular.module('app').controller('FilmCtrl', function (FilmSrv, $scope) {


    FilmSrv.getAll()
        .then(function (result) {
            $scope.all=true;
            $scope.films = result.data;
         
        })
        .catch(function (err) {
            console.log(err);
        })

    $scope.dettaglio = function (id) {
        FilmSrv.getOne(id)
            .then(function (result) {
                $scope.film = result.data;
                $scope.all=false;
            })
            .catch(function (err) {

            });

    }
    $scope.visible=true;
    
     
    $scope.$parent.inserisci = function() {
        // console.log('inserisci film');
        $scope.form_visibile = !$scope.form_visibile;
      
        
    };   
        $scope.inserisci_film = function(film){
            console.log(film.nome);
            var nuovo = {
                title: film.nome,
                vote_average:film.voto,
                poster_path: film.immagine,
                overview: film.recensione}
            
            FilmSrv.inserisci(nuovo)
                .then(function(result) {
                    $scope.films = result.data;
                    
                })
                .catch(function (err) {
                    
                });
                location.href="index.html";
            }; 

    });