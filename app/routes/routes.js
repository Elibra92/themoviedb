angular.module('app')
.config(function(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider) {

        $locationProvider.html5Mode(true).hashPrefix('!');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('/', {
                url: '/',
                views: {
                    menu: {
                        templateUrl: 'app/UI/nav.template.html',
                        controller: 'navCtrl'
                    },
                    contenuto: {
                        templateUrl: 'app/resource/home/home.template.html',
                        controller: 'homeCtrl'
                    }
                }
            })
            .state('/films', {
                url: '/films',
                resolve: {
                    films: function(FilmsSrv) {
                        return FilmsSrv.getAll();
                    },
                 },
                views: {
                    menu: {
                        templateUrl: 'app/UI/nav.template.html',
                        controller: 'navCtrl'
                    },
                    contenuto: {
                        templateUrl: 'app/resource/films/films.template.html',
                        controller: 'filmsCtrl' 
                    }
                }
            })

    })