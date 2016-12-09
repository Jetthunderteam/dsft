/******************************
 * Utils Factory
 *******************************/
(function () {
    'use strict';
    angular
        .module('dsft.utils')
        .factory('utilsFactory', utilsFactory);

    utilsFactory.$inject = [];
    function utilsFactory() {
        return {
            getMoment: getMoment,
            getTime: getTime,
            getYear: getYear
        };

        /**
         * Gets the current moment
         * @returns {hooks|moment}
         */
        function getMoment() {
            return new moment();
        }

        /**
         * Gets the current moment in format HH:mm
         * @returns {string} time - The current time in HH:mm
         */
        function getTime() {
            return getMoment().format('HH:mm');
        }

        /**
         * Gets the current moment in format YYYY
         * @returns {string} year - The current year in YYYY
         */
        function getYear() {
            return getMoment().format('YYYY');
        }
    }
})();