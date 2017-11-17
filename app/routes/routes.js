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
            .state('films', {
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

            .state('film', {
                url: '/film/{id}',
                resolve: {
                    film: function(FilmsSrv, $stateParams) {
                        return FilmsSrv.getOne($stateParams.id);
                    },
                 },
                views: {
                    menu: {
                        templateUrl: 'app/UI/nav.template.html',
                        controller: 'navCtrl'
                    },
                    contenuto: {
                        templateUrl: 'app/resource/films/film.template.html',
                        controller: 'filmCtrl',
                     
                    }
                }
            })
            .state('nuovofilm', {
                url: '/nuovofilm/{id}',
                resolve: {
                    generi: function(GeneriSrv) {
                        return GeneriSrv.getAllGeneri();
                    },
                    film2: function(FilmsSrv, $stateParams) {
                        
                        if ($stateParams.id == 'nuovo')
                        return null;
                    else
                        return FilmsSrv.getOne($stateParams.id)
                    }
                },
                views: {
                    menu: {
                        templateUrl: 'app/UI/nav.template.html',
                        controller: 'navCtrl'
                    },
                    contenuto: {
                        templateUrl: 'app/resource/films/nuovofilm.template.html',
                        controller: 'nuovofilmCtrl',
                     
                    }
                }
            })
    })