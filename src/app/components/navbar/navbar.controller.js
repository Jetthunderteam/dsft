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

        /** Bindings */
        vm.openSideNav = openSideNav;

        /**
         * Opens the side navigation panel from the specified
         * direction
         * @param {string} direction - The direction of toggle, I.e, left or right
         */
        function openSideNav(direction) {
            $mdSidenav(direction).toggle();
        }
    }
})();