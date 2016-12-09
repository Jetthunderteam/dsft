/*************************
 Navbar Component
 **************************/
(function () {
    'use strict';

    angular
        .module('dsft.navbar')
        .component('navbarComponent', navbarComponent());

    navbarComponent.$inject = [];
    function navbarComponent() {
        var component = {
            bindings: {},
            templateUrl: 'src/app/components/navbar/navbar.html',
            controller: 'NavbarCtrl',
            controllerAs: 'NavbarCtrl'
        };
        return component;
    }
})();