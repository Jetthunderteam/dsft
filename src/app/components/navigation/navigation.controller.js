/*************************
 Navigation Controller
 **************************/
(function () {
    'use strict';

    angular
        .module('dsft.navigation')
        .controller('NavigationCtrl', NavigationCtrl);

    NavigationCtrl.$inject = [];
    function NavigationCtrl() {
        var vm = this;

        /** Activate */
        vm.$onInit = activate;

        /** View Bindings */

        /** Bindings */

        function activate() {
            console.log('Yo!');
        }
    }
})();