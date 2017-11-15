angular.module('app').service('FilmSrv', function($http){

       //USO GENERICO       
       var getAll= function(){
           return $http({
                       method: 'GET',
                       url: '/api/films'
                   });
                   
       };
       console.log(getAll);
       var getOne= function(id){
        return $http({
                    method: 'GET',
                    url: '/api/films/'+id
                });
    };

    var inserisci= function(nuovo) {
        // console.log(nuovo);
        return $http({
                method: 'POST',
                url: '/api/films',
                json:true,
                data: nuovo
        })
        .then(function successCallback(response) {
            console.log('inserito');
            
        }, function errorCallback(response) {
           // called asynchronously if an error occurs
          // or server returns response with an error status.
      });

        
    }

        
    
       
   
     return {
      getAll: getAll,
      getOne: getOne,
      inserisci: inserisci
    }
});