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
            .catch(function (pippo) {

            });

    }
    $scope.visible=true;
    $scope.elencogeneri = [
        "Cerca per genere",
        "Azione",
        "Avventura",
        "Animazione",
        "Commedia",
        "Crime",
        "Documentario",
        "Dramma",
        "Famiglia",
        "Fantasy",
        "Storia",
        "Horror",
        "Musica",
        "Mistero",
        "Romance",
        "Fantascienza",
        "televisione film",
        "Thriller",
        "Guerra",
        "Western"
        ]

    $scope.genere = $scope.elencogeneri[0];
});