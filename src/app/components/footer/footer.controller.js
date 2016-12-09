/*************************
 Footer Controller
 **************************/
(function () {
    'use strict';

    angular
        .module('dsft.footer')
        .controller('FooterCtrl', FooterCtrl);

    FooterCtrl.$inject = ['utilsFactory'];
    function FooterCtrl(utilsFactory) {
        var vm = this;

        /** Activate */

        /** View Bindings */

        /** Bindings */
        vm.getYear = getYear;

        /**
         * Gets the current year in YYYY format
         * @returns {string} year - The current year in YYYY
         */
        function getYear() {
           return utilsFactory.getYear();
        }
    }
})();