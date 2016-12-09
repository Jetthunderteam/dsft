/*************************
 Footer Controller Spec
 **************************/
describe('Footer Controller Tests', spec);

function spec() {
    var scope, controller, utilsFactory;

    beforeEach(function() {
        module('dsft');
        inject(function($rootScope, $controller, _utilsFactory_) {
            scope = $rootScope.$new();
            controller = $controller('FooterCtrl', {$scope: scope});
            utilsFactory = _utilsFactory_;
        })
    });

    describe('Footer Controller Specs', function () {
        it('Should have a defined controller', function () {
            expect(controller).toBeDefined();
        });

        /**
         * Footer copyright tests
         */
        it('Should get the current year in YYYY format on calling "getYear"', function () {
            spyOn(utilsFactory, 'getYear').and.returnValue('2016');
            expect(controller.getYear()).toEqual('2016');
        });
    });
}