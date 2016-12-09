/*************************
 Navigation Controller
 **************************/
(function () {
    'use strict';

    angular
        .module('dsft.navigation')
        .controller('NavigationCtrl', NavigationCtrl);

    NavigationCtrl.$inject = ['$mdSidenav'];
    function NavigationCtrl($mdSidenav) {
        var vm = this;

        /** Activate */

        /** View Bindings */

        /** Bindings */
        vm.closeSideNav = closeSideNav;

        /**
         * Closes the side navigation panel from the specified
         * direction
         * @param {string} direction - The direction of toggle, I.e, left or right
         */
        function closeSideNav(direction) {
            $mdSidenav(direction).toggle();
        }
    }
})();