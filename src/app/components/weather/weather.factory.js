/*************************
 Weather Factory
 **************************/
(function () {
    'use strict';

    angular
        .module('dsft.weather')
        .factory('weatherFactory', weatherFactory);

    weatherFactory.$inject = ['$http', 'rx', 'weatherConstants'];
    function weatherFactory($http, rx, weatherConstants) {
        var factory = {
            getUpstreamAirfieldsData: getUpstreamAirfieldsData,
            getUpstreamThreeHourlyForecastData: getUpstreamThreeHourlyForecastData,
            setMapFocus: setMapFocus
        };

        /**
         * Gets upstream locations data for all European airfields
         * @param upstreamUrl
         * @returns {Rx.Observable<T>}
         */
        function getUpstreamAirfieldsData(upstreamUrl) {
            var url = upstreamUrl;
            return rx.Observable.fromPromise($http({
                url: url,
                method: "GET"
            }))
        }

        /**
         * Gets upstream three hourly forecast data for a specific
         * site using the requested siteId
         * @param upstreamUrl
         * @param siteId
         * @returns {Rx.Observable<T>}
         */
        function getUpstreamThreeHourlyForecastData(upstreamUrl, siteId) {
            var url = upstreamUrl.replace('{siteId}', siteId).replace('{apiKey}', weatherConstants.DATA_POINT_API_KEY);
            return rx.Observable.fromPromise($http({
                url: url,
                method: "GET"
            }))
        }

        function setMapFocus(selectedLocation) {
            //var location = {};
            //if (angular.isObject(selectedLocation)) {
            //
            //}
        }

        return factory;
    }
})();
