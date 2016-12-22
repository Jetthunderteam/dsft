/*************************
 Navigation Controller Spec
 **************************/
describe('Navigation Controller Tests', spec);

function spec() {
    var scope, controller, mockCloseSideNav;

    beforeEach(function() {
        module('dsft');
        module(function ($provide) {
            mockCloseSideNav = jasmine.createSpy();
            $provide.factory('$mdSidenav', function () {
                return function () {
                    return {toggle: mockCloseSideNav};
                };
            });
        });
        inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('NavigationCtrl', {$scope: scope});
        })
    });

    describe('Navigation Controller Specs', function () {
        it('Should have a defined controller', function () {
            expect(controller).toBeDefined();
        });

        /**
         * Function Tests
         */
        it('Should open the side navigation menu on calling "openSideNav"', function () {
            controller.closeSideNav('left');
            expect(mockCloseSideNav).toHaveBeenCalled();
        });
    });
}
