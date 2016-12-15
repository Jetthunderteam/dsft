/*************************
 Application Modules
 **************************/
(function () {
    'use strict';

    angular.module('dsft', [
        'ngAnimate',
        'ngMaterial',
        'ngSanitize',
        'rx',
        'ui.bootstrap',
        'ui.router',
        'ui-leaflet',
        'angulartics',
        'angulartics.google.tagmanager',
        'dsft.home',
        'dsft.training',
        'dsft.experience',
        'dsft.fleet',
        'dsft.weather',
        'dsft.navbar',
        'dsft.navigation',
        'dsft.footer',
        'dsft.utils']);

    //Auth

    //Views
    angular.module('dsft.home', []);
    angular.module('dsft.training', []);
    angular.module('dsft.experience', []);
    angular.module('dsft.fleet', []);
    angular.module('dsft.weather', []);

    //Components
    angular.module('dsft.navbar', []);
    angular.module('dsft.navigation', []);
    angular.module('dsft.footer', []);

    //Utils
    angular.module('dsft.utils', []);

    //Analytics
})();
