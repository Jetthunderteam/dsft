/*************************
 Navbar Controller
 **************************/
(function () {
    'use strict';

    angular
        .module('dsft.navbar')
        .controller('NavbarCtrl', navbarCtrl);

    navbarCtrl.$inject = ['$mdSidenav'];
    function navbarCtrl($mdSidenav) {
        var vm = this;

        /** Activate */

        /** View Bindings */
        vm.openSideNav = openSideNav;

        /** Bindings */

        function openSideNav(direction) {
            $mdSidenav(direction).toggle();
        }
    }
})();