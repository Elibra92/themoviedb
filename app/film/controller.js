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
    console.log($scope.genere);
});