angular.module('app').service('FilmsSrv', function($http) {
    var getAll = function() {
        return $http({
            method:'GET',
            url: 'api/films'
        })
    }

    var getOne = function(id) {
        return $http({
            method:'GET',
            url: 'api/films/'+id
        })
    }

    var setRating = function(id, voto) {
        return $http({
            method: 'PUT',
            url: 'api/films/voto/' + id,
            data: voto
        })
    }

    var elimina = function(id) {
        return $http({
            method: 'DELETE',
            url: 'api/films/' + id,
        })
    }
    var InsertOne = function(film) {
        return $http({
            method: 'POST',
            url: 'api/films',
            data: film
        })
    }

    var UpdateOne = function(film) {
        return $http({
            method: 'PUT',
            url: 'api/films/' + film._id,
            data: film
        })
    }

    return {
        getAll:getAll,
        getOne:getOne,
        setRating:setRating,
        InsertOne: InsertOne,
        UpdateOne:UpdateOne,
        elimina:elimina
    }
});