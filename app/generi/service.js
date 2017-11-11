angular.module('app').service('GeneriSrv', function($http){

        
       //USO GENERICO       
       var getAllGeneri= function(){
           return $http({
                       method: 'GET',
                       url: '/api/generi'
                   });

       };

      


     return {
      getAllGeneri: getAllGeneri
    }
});