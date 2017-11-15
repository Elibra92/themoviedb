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
    
                
        $scope.inserisci_film = function(nome){
            var nuovo = {
                title: nome,
                vote_average: $scope.voto_film,
                poster_path: $scope.immagine_film,
                overview: $scope.recensione}
            
            FilmSrv.inserisci(nuovo)
                .then(function(result) {
                    $scope.films = result.data;
                })
                .catch(function (err) {
                    
                });
        }; 

    });