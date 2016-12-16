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
        var vm = this;

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
        vm.closeAirfieldDetails = closeAirfieldDetails;
        vm.getAirfields = getAirfields;
        vm.getThreeHourlyForecast = getThreeHourlyForecast;
        vm.openAirfieldDetails = openAirfieldDetails;
        vm.selectAirfield = selectAirfield;
        vm.setMapFocus = setMapFocus;

        /** Event Listeners */
        $scope.$on('leafletDirectiveMarker.dsftWeatherMap.click', selectAirfield);
        $scope.$on(weatherConstants.EVENT_MARKER_CLICK, function(event, args) {
            getThreeHourlyForecast(args.model.sspaid);
            openAirfieldDetails(event);
        });

        /**
         * Activates the weather controller and makes calls
         * to the following methods:
         *      - getAirfields: Gets the list of all European airfields
         */
        function activate() {
            getAirfields();
        }

        function closeAirfieldDetails() {
            $mdDialog.cancel();
        }

        function getAirfields() {
            var upstreamUrl = weatherConstants.UK_AIRFIELDS_URL;
            weatherFactory.getUpstreamAirfieldsData(upstreamUrl).subscribe(getAirfieldsSuccess, getAirfieldsError);

            function getAirfieldsSuccess(response) {
                vm.airfields = response.data;
            }

            function getAirfieldsError(error) {
                $log.error(error);
            }
        }

        function getThreeHourlyForecast(siteId) {
            var upstreamUrl = weatherConstants.THREE_HOURLY_FORECAST_URL;
            weatherFactory.getUpstreamThreeHourlyForecastData(upstreamUrl, siteId).subscribe(getThreeHourlyForecastSuccess, getThreeHourlyForecastError);

            function getThreeHourlyForecastSuccess(response) {
                vm.forecast = response.data;
            }

            function getThreeHourlyForecastError(error) {
                $log.error(error);
            }
        }

        function openAirfieldDetails(event) {
            $mdDialog.show({
                controller: 'WeatherCtrl',
                controllerAs: 'WeatherCtrl',
                templateUrl: 'src/app/components/dialogs/airfield-details.html',
                targetEvent: event,
                clickOutsideToClose:true
            });
        }

        function selectAirfield(event, args) {
            setMapFocus(args);
            $rootScope.$broadcast(weatherConstants.EVENT_MARKER_CLICK, args);
        }

        function setMapFocus(selectedItem) {
            //console.log(selectedItem, typeof(selectedItem));
            vm.mapCentre = {
                lat: selectedItem.model.lat,
                lng: selectedItem.model.lng,
                zoom: 10
            }
        }
    }
})();
