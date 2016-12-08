/*************************
 Application Configuration
 **************************/
(function () {
    'use strict';
    angular
        .module('dsft')
        .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function appConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/app/components/home/home.html',
                controller: "HomeCtrl",
                controllerAs: "HomeCtrl"
            })
            .state('training', {
                url: '/training',
                templateUrl: 'src/app/components/training/training.html',
                controller: "TrainingCtrl",
                controllerAs: "TrainingCtrl"
            })
            .state('experience', {
                url: '/experience',
                templateUrl: 'src/app/components/experience/experience.html',
                controller: "ExperienceCtrl",
                controllerAs: "ExperienceCtrl"
            })
            .state('fleet', {
                url: '/fleet',
                templateUrl: 'src/app/components/fleet/fleet.html',
                controller: "FleetCtrl",
                controllerAs: "FleetCtrl"
            });
    }
})();