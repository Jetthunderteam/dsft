/*************************
 Weather Controller
 **************************/
(function () {
    'use strict';

    angular
        .module('dsft.weather')
        .controller('WeatherCtrl', WeatherCtrl);

    WeatherCtrl.$inject = ['$rootScope', '$scope', '$log', '$mdDialog', 'weatherFactory', 'weatherConstants'];
    function WeatherCtrl($rootScope, $scope, $log, $mdDialog, weatherFactory, weatherConstants) {
        var vm = this, _airfields, _forecast;

        /** Activate */
        vm.$onInit = activate;

        /** View Bindings */
        vm.airfields = {};
        vm.forecast = {};
        vm.mapBounds = weatherConstants.MAP_BOUNDS;
        vm.mapCentre = weatherConstants.MAP_CENTRE;
        vm.mapControls = weatherConstants.MAP_CONTROLS;
        vm.mapDefault = weatherConstants.MAP_DEFAULTS;

        /** Bindings */
        vm.getAirfields = getAirfields;
        vm.getThreeHourlyForecast = getThreeHourlyForecast;
        vm.selectAirfield = selectAirfield;
        vm.setMapFocus = setMapFocus;

        /** Event Listeners */
        $scope.$on('leafletDirectiveMarker.dsftWeatherMap.click', selectAirfield);
        $scope.$on(weatherConstants.EVENT_MARKER_CLICK, function(event, args) {
            getThreeHourlyForecast(args.model);
        });

        /**
         * Activates the weather controller and makes calls
         * to the following methods:
         *      - getAirfields: Gets the list of all European airfields
         */
        function activate() {
            getAirfields();
        }

        /**
         *
         */
        function getAirfields() {
            var upstreamUrl = weatherConstants.UK_AIRFIELDS_URL;
            weatherFactory.getUpstreamAirfieldsData(upstreamUrl).subscribe(getAirfieldsSuccess, getAirfieldsError);

            function getAirfieldsSuccess(response) {
                _airfields = weatherFactory.setMarkerDefaults(response.data);
                vm.airfields = _airfields;
            }

            function getAirfieldsError(error) {
                $log.error(error);
            }
        }

        /**
         *
         * @param siteId
         */
        function getThreeHourlyForecast(model) {
            var upstreamUrl = weatherConstants.THREE_HOURLY_FORECAST_URL;
            weatherFactory.getUpstreamThreeHourlyForecastData(upstreamUrl, model.sspaid).subscribe(getThreeHourlyForecastSuccess, getThreeHourlyForecastError);

            function getThreeHourlyForecastSuccess(response) {
                _forecast = response.data;
                vm.forecast = _forecast;
                weatherFactory.setAirfieldDetails(model, _forecast);
            }

            function getThreeHourlyForecastError(error) {
                $log.error(error);
            }
        }

        /**
         *
         * @param event
         * @param args
         */
        function selectAirfield(event, args) {
            setMapFocus(args);
            $rootScope.$broadcast(weatherConstants.EVENT_MARKER_CLICK, args);
        }

        /**
         *
         * @param selectedItem
         */
        function setMapFocus(selectedItem) {
            vm.mapCentre = {
                lat: selectedItem.model.lat,
                lng: selectedItem.model.lng,
                zoom: 10
            }
        }
    }
})();
