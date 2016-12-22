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
            convertMphToKnot: convertMphToKnot,
            getMoment: getMoment,
            getTime: getTime,
            getYear: getYear
        };

        /**
         * Converts a value from Mph to Knots
         * @param {string} value - The provided value in Mph
         * @returns {string} convertedValue - The converted value in Knots
         */
        function convertMphToKnot(value) {
            var conversionFactor = 0.868976, convertedValue = '-';
            if (angular.isString(value) &&  value != null) {
                convertedValue = Math.round(parseInt(value) * conversionFactor).toString();
            }
            return convertedValue;
        }

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
