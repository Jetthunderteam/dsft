/*************************
 Navbar Controller
 **************************/
(function () {
    'use strict';

    angular
        .module('dsft.navbar')
        .controller('NavbarCtrl', navbarCtrl);

    navbarCtrl.$inject = ['$mdDialog', '$mdSidenav'];
    function navbarCtrl($mdDialog, $mdSidenav) {
        var vm = this;

        /** Activate */

        /** View Bindings */

        /** Bindings */
        vm.openSideNav = openSideNav;
        vm.openSignIn =openSignIn;
        vm.openSignUp =openSignUp;

        /**
         * Opens the side navigation panel from the specified
         * direction
         * @param {string} direction - The direction of toggle, I.e, left or right
         */
        function openSideNav(direction) {
            $mdSidenav(direction).toggle();
        }

        function openSignIn() {

        }

        function openSignUp() {

        }
    }
})();