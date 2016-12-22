/******************************
 * Weather Constants
 *******************************/
(function () {
    'use strict';
    angular
        .module('dsft.weather')
        .constant('weatherConstants', {
            /** Data Point Constants */
            DATA_POINT_API_KEY: '499db739-da03-49a8-9991-740e6e633e76',
            /** Event Constants */
            EVENT_MARKER_CLICK: 'markerClickEvent',
            /** Map Constants */
            MAP_AIRFIELD_ICON: {
                iconUrl: 'src/assets/images/map/spitfire_icon_small.png'
                // iconSize: [38, 95], // size of the icon
                // shadowSize: [50, 64], // size of the shadow
                // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
                // shadowAnchor: [4, 62],  // the same for the shadow
                // popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
            },
            MAP_AIRFIELD_POPUP_OPTIONS: {
                maxWidth: '500',
                className : 'dsft-weatherMapAirfieldPopup'
            },
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
            MAP_CENTRE: {
                lat: 51.505,
                lng: -0.09,
                zoom: 4
            },
            MAP_CONTROLS: {
                scale: true
            },
            MAP_DEFAULTS: {
                maxZoom: 15,
                minZoom: 2
            },
            /** URL Constants */
            THREE_HOURLY_FORECAST_URL: 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/{siteId}?res=3hourly&key={apiKey}',
            UK_AIRFIELDS_URL: 'src/data/uk-airfields.json'
        });
})();
