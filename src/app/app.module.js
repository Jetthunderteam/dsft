/*************************
 Application Modules
 **************************/
(function () {
    'use strict';

    angular.module('dsft', [
        'ngAnimate',
        'ngMaterial',
        'ngSanitize',
        'ui.bootstrap',
        'ui.router',
        'angulartics',
        'angulartics.google.tagmanager',
        'dsft.home',
        'dsft.training',
        'dsft.experience',
        'dsft.fleet',
        'dsft.navigation']);

    //Auth

    //Views
    angular.module('dsft.home', []);
    angular.module('dsft.training', []);
    angular.module('dsft.experience', []);
    angular.module('dsft.fleet', []);

    //Components
    angular.module('dsft.navigation', []);

    //Utils

    //Analytics
})();