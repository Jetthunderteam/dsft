/******************************
 * Weather Constants
 *******************************/
(function () {
    'use strict';
    angular
        .module('dsft.weather')
        .constant('weatherConstants', {
            DATA_POINT_API_KEY: '499db739-da03-49a8-9991-740e6e633e76',
            DATA_POINT_URL: 'http://datapoint.metoffice.gov.uk/public/data/',
            EVENT_MARKER_CLICK: 'markerClickEvent',
            MAP_BOUNDS: {
                northEast: {
                    lat: 85,
                    lng: 180
                },
                southWest: {
                    lat: -85,
                    lng: -180
                }
            },
            MAP_CONTROLS: {
                scale: true
            },
            MAP_CENTRE: {
                lat: 51.505,
                lng: -0.09,
                zoom: 4
            },
            MAP_DEFAULTS: {
                maxZoom: 15,
                minZoom: 2
            },
            UK_AIRFIELDS_URL: 'src/data/uk-airfields.json'
        });
})();
