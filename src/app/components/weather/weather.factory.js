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
            '<tr><th>Wind Direction</th> <th>Wind Speed (Kt)</th> <th>Gust Speed (Kt)</th> <th>Temp (°)</th> <th>Weather Type</th></tr>' +
            '<tr><td>{{windDir}}</td> <td>{{windSpeed}}</td> <td>{{windGust}}</td> <td>{{temp}}</td> <td>{{weatherType}}</td></tr>' +
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
                siteMessage = 'The '+forecastObject.SiteRep.DV.dataDate+' data for '+siteObject.siteName+' is currently unavaibale',
                siteRep = forecastObject.SiteRep.DV;
            if (siteRep.hasOwnProperty('Location')) {
                currentPeriod = siteRep.Location.Period[0].Rep[0];
                if (angular.isObject(currentPeriod) && !angular.isUndefined(currentPeriod)) {
                    siteMessage = reportTable
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
                siteObject["message"] = 'Loading data for ' + siteObject.siteName;
            });
            return sitesArray;
        }

        return factory;
    }
})();
