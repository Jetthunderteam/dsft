/*************************
 Weather Controller Spec
 **************************/
describe('Weather Controller Tests', spec);

function spec() {
    var scope, controller,
        _mockMapBounds,
        _mockMapCentre,
        _mockMapControls,
        _mockMapDefaults;

    _mockMapBounds = {northEast: {lat: 85, lng: 180}, southWest: {lat: -85, lng: -180}};
    _mockMapCentre = {lat: 51.505, lng: -0.09, zoom: 4};
    _mockMapControls = {scale: true};
    _mockMapDefaults = {maxZoom: 15, minZoom: 2};

    beforeEach(function() {
        module('dsft');
        inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('WeatherCtrl', {$scope: scope});
        })
    });

    describe('Weather Controller Specs', function () {
        it('Should have a defined controller', function () {
            expect(controller).toBeDefined();
        });

        /**
         * Binding Tests
         */
        it('Should have a defined set of map constants', function () {
            expect(controller.mapBounds).toEqual(_mockMapBounds);
            expect(controller.mapCentre).toEqual(_mockMapCentre);
            expect(controller.mapControls).toEqual(_mockMapControls);
            expect(controller.mapDefault).toEqual(_mockMapDefaults);
        });

        /**
         * Function Tests
         */
    });
}
