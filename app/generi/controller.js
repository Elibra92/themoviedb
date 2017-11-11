angular.module('app').controller('GeneriCtrl', function (GeneriSrv, $scope) {


    GeneriSrv.getAllGeneri()
        .then(function (result) {
            $scope.elencogeneri = result.data;
            
            
         
        })
        .catch(function (err) {
            console.log(err);
        })

   
    
});