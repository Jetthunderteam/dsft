/*************************
 Weather Factory Spec
 **************************/
describe('Weather Factory Tests', spec);

function spec() {
    var rootScope, httpBackend, weatherFactory, mockUpstreamAirfields,
        _mockUpstreamAirfieldsUrl;

    beforeEach(function() {
        module('dsft');
        module('mockUpstreamAirfields.json');
        module(function($urlRouterProvider) {
            $urlRouterProvider.deferIntercept();
        });
        inject(function($rootScope, $httpBackend, _weatherFactory_, _mockUpstreamAirfields_) {
            rootScope = $rootScope;
            httpBackend = $httpBackend;
            weatherFactory = _weatherFactory_;
            mockUpstreamAirfields = _mockUpstreamAirfields_;
        })
    });

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    describe('Weather Factory Specs', function () {
        it('Should have a defined controller', function () {
            expect(weatherFactory).toBeDefined();
        });

        /**
         * Function Tests
         */
        // it('Should return the upstream airfields data on calling getUpstreamAirfieldsData() on a successful request', function() {
        //     _mockUpstreamAirfieldsUrl = 'test';
        //     httpBackend.when('GET', _mockUpstreamAirfieldsUrl).respond(mockUpstreamAirfields);
        //     weatherFactory.getUpstreamAirfieldsData(_mockUpstreamAirfieldsUrl).then(function (result) {
        //         expect(result).toEqual(mockUpstreamAirfields)
        //     });
        //     httpBackend.flush();
        // });
    });
}
