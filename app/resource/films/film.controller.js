angular.module('app').controller('filmCtrl', function($scope, film, FilmsSrv, $state) {
    $scope.film = film.data;
    $scope.stelle = [{
        colorata:false
    },
    {
        colorata:false
    },
    {
        colorata:false
    },
    {
        colorata:false
    },
    {
        colorata:false
    },
    ];

    $scope.colora = function(indice) {
        console.log(indice);
        for(let i = 0; i <= indice; i++) {
            this.stelle[i].colorata = true;
        }
    }

    $scope.decolora = function() {
       this.stelle.forEach(function(stella) {
            stella.colorata = false;
       });
    }

    $scope.elimina= function(id) {
        FilmsSrv.elimina(id)
        .then(function(result) {
            $state.go('films');
        })
        .catch(function(err) {
            console.log(err);
        }) 
    }

    $scope.vota = function(indice) {       
        var voto = {
            'voto_nostro': (indice+1)*2     //++ xk la prima posizione è 0 e deve corrispondere a 1 stella
        }
        FilmsSrv.setRating($scope.film._id, voto)
            .then(function(result) {
                console.log(result.data)
            })
            .catch(function(err) {
                console.log(err);
            }) 
    }

})