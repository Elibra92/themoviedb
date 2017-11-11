angular.module('app').service('FilmSrv', function($http){

        
       //USO GENERICO       
       var getAll= function(){
           return $http({
                       method: 'GET',
                       url: '/api/films'
                   });

       };

       var getOne= function(id){
          
    
        return $http({
                    method: 'GET',
                    url: '/api/films/'+id
                });
    };


     return {
      getAll: getAll,
      getOne: getOne
    }
});