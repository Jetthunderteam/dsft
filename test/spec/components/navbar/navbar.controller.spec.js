/*************************
 Navbar Controller Spec
 **************************/
describe('Navbar Controller Tests', spec);

function spec() {
    var scope, controller, mockOpenSideNav;

    beforeEach(function() {
        module('dsft');
        module(function ($provide) {
            mockOpenSideNav = jasmine.createSpy();
            $provide.factory('$mdSidenav', function () {
                return function () {
                    return {toggle: mockOpenSideNav};
                };
            });
        });
        inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('NavbarCtrl', {$scope: scope});
        })
    });

    describe('Navbar Controller Specs', function () {
        it('Should have a defined controller', function () {
            expect(controller).toBeDefined();
        });

        /**
         * Sidenav event tests
         */
        it('Should open the side navigation menu on calling "openSideNav"', function () {
            controller.openSideNav('left');
            expect(mockOpenSideNav).toHaveBeenCalled();
        });
    });
}