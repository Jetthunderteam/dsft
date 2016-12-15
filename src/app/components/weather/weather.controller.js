/*************************
 Weather Controller
 **************************/
(function () {
    'use strict';

    angular
        .module('dsft.weather')
        .controller('WeatherCtrl', WeatherCtrl);

    WeatherCtrl.$inject = ['$rootScope', '$scope', '$mdDialog', 'weatherFactory', 'weatherConstants'];
    function WeatherCtrl($rootScope, $scope, $mdDialog, weatherFactory, weatherConstants) {
        var vm = this;
        /** Activate */
        vm.$onInit = activate;

        /** View Bindings */
        vm.airfields = '';
        vm.mapBounds = weatherConstants.MAP_BOUNDS;
        vm.mapCentre = weatherConstants.MAP_CENTRE;
        vm.mapControls = weatherConstants.MAP_CONTROLS;
        vm.mapDefault = weatherConstants.MAP_DEFAULTS;

        /** Bindings */
        vm.getAirfields = getAirfields;
        vm.openAirfieldDetails = openAirfieldDetails;
        vm.selectAirfield = selectAirfield;
        vm.setMapFocus = setMapFocus;

        /** Event Listeners */
        $scope.$on('leafletDirectiveMarker.dsftWeatherMap.click', selectAirfield);
        $scope.$on(weatherConstants.EVENT_MARKER_CLICK, function(event) {
            console.log(event);
        });

        /**
         * Activates the weather controller and makes calls
         * to the following methods:
         *      - getAirfields: Gets the list of all UK airfields
         */
        function activate() {
            getAirfields();
        }

        /**
         * Makes a request to obtain the current list of UK
         * airfields
         */
        function getAirfields() {
            var upstreamUrl = weatherConstants.UK_AIRFIELDS_URL;
            weatherFactory.getUpstreamData(upstreamUrl).subscribe(getAirfieldsSuccess, getAirfieldsError);

            function getAirfieldsSuccess(response) {
                vm.airfields = response.data;
            }

            function getAirfieldsError(error) {
                console.log(error);
            }
        }

        function openAirfieldDetails() {

        }

        /**
         * @param {object} event
         * @param {object} args
         */
        function selectAirfield(event, args) {
            setMapFocus(args);
            $rootScope.$broadcast(weatherConstants.EVENT_MARKER_CLICK)
        }

        /**
         * Sets the focus of the map to the desired
         * latitude, longitude and zoom level with the provided
         * item
         * @param {object} selectedItem
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
