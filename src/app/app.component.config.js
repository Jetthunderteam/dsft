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
                templateUrl: 'src/app/components/home/home.component.html',
                controller: "HomeCtrl",
                controllerAs: "HomeCtrl"
            });
    }
})();