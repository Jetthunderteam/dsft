/*************************
 Weather Factory
 **************************/
(function () {
    'use strict';

    angular
        .module('dsft.weather')
        .factory('weatherFactory', weatherFactory);

    weatherFactory.$inject = ['$http', '$log', 'rx', 'weatherConstants', 'utilsFactory'];

    function weatherFactory($http, $log, rx, weatherConstants, utilsFactory) {
        var factory = {
            getUpstreamAirfieldsData: getUpstreamAirfieldsData,
            getUpstreamThreeHourlyForecastData: getUpstreamThreeHourlyForecastData,
            setAirfieldDetails: setAirfieldDetails,
            setMarkerDefaults: setMarkerDefaults
        };

        /** Variables */
        var reportTable = '<table class="dsft-weatherMap">' +
            '<tr><th colspan="2">{{siteProps}}</th></tr>' +
            '<tr><td>Wind Direction</td> <td>{{windDir}}</td></tr>' +
            '<tr><td>Wind Speed (Kt)</td> <td>{{windSpeed}}</td></tr>' +
            '<tr><td>Gust Speed (Kt)</td> <td>{{windGust}}</td></tr>' +
            '<tr><td>Temp (°)</td> <td>{{temp}}</td></tr>' +
            '<tr><td>Weather Type</td> <td>{{weatherType}}</td></tr>' +
            '</table>',
            reportTableError = '<table class="dsft-weatherMap">' +
                '<tr><th colspan="2">{{siteProps}}</th></tr>' +
                '</table>';

        /**
         * Gets upstream locations data for all European airfields
         * @param {string} upstreamUrl - The upstream url
         * @returns {Rx.Observable} observable - The returned observable
         */
        function getUpstreamAirfieldsData(upstreamUrl) {
            var observable;
            observable = rx.Observable.fromPromise($http({
                url: upstreamUrl,
                method: "GET"
            }));
            console.log(observable);
            return observable;
        }

        /**
         * Gets upstream three hourly forecast data for a specific
         * site using the requested siteId
         * @param {string} upstreamUrl - The upstream url
         * @param {string} siteId - The siteId of the selected airfield
         * @returns {Rx.Observable} observable - The returned observable
         */
        function getUpstreamThreeHourlyForecastData(upstreamUrl, siteId) {
            var observable, url = upstreamUrl.replace('{siteId}', siteId).replace('{apiKey}', weatherConstants.DATA_POINT_API_KEY);
            observable = rx.Observable.fromPromise($http({
                url: url,
                method: "GET"
            }));
            return observable;
        }

        /**
         * Sets the airfield details to a new message property of the
         * selected airfield
         * @param {object} siteObject - The location data for the selected site
         * @param {object} forecastObject - The forecast data for the selected site
         */
        function setAirfieldDetails(siteObject, forecastObject) {
            var currentPeriod,
                siteMessage = reportTableError.replace('{{siteProps}}', 'Data unavailable for '+siteObject.siteName),
                siteRep = forecastObject.SiteRep.DV;
            if (siteRep.hasOwnProperty('Location')) {
                currentPeriod = siteRep.Location.Period[0].Rep[0];
                if (angular.isObject(currentPeriod) && !angular.isUndefined(currentPeriod)) {
                    siteMessage = reportTable
                        .replace('{{siteProps}}', siteObject.siteName)
                        .replace('{{windDir}}', currentPeriod.D)
                        .replace('{{windSpeed}}', utilsFactory.convertMphToKnot(currentPeriod.S))
                        .replace('{{windGust}}', utilsFactory.convertMphToKnot(currentPeriod.G))
                        .replace('{{temp}}', currentPeriod.T)
                        .replace('{{weatherType}}', currentPeriod.W);
                } else {
                    $log.error('The forecast data for the selected site is either null, empty or undefined');
                }
            } else {
                $log.error('The locations feed for the selected site is either null, empty or undefined');
            }
            siteObject["message"] = siteMessage;
        }

        /**
         * Sets the correct icon and initializer message for each of the
         * European airfields
         * TODO - Modify to switch icon depending on airfield status
         * @param {array} sitesArray - The data for all locations
         * @returns {array} sitesArray - The modified data for all locations
         */
        function setMarkerDefaults(sitesArray) {
            sitesArray.forEach(function (siteObject) {
                siteObject["icon"] = weatherConstants.MAP_AIRFIELD_ICON;
                siteObject["popupOptions"] = weatherConstants.MAP_AIRFIELD_POPUP_OPTIONS;
                siteObject["message"] = reportTableError.replace('{{siteProps}}', 'Loading data for '+siteObject.siteName);
            });
            return sitesArray;
        }

        return factory;
    }
})();
