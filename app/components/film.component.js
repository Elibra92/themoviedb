angular.module('app').component('filmCard', {           //il primo parametro stringa, il secondo un oggetto
    templateUrl: 'app/components/filmcomponent.template.html',              
    bindings: {
        film: '='                   //se metto = accetta la variabile, @ accetta una stringa, < accetta una variabile ma non si riflette all'esterno

    }
})