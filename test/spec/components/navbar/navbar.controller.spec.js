/*************************
 Navbar Controller Spec
 **************************/
describe('Navbar Controller Tests', spec);

function spec() {
    var scope, controller, openSideNavToggle;

    beforeEach(function() {
        module('dsft');
        module(function ($provide) {
            openSideNavToggle = jasmine.createSpy();
            $provide.factory('$mdSidenav', function () {
                return function () {
                    return {toggle: openSideNavToggle};
                };
            });
        });
        inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('NavbarCtrl', {$scope: scope});
        })
    });

    it('Should open the side navigation menu on calling "openSideNav"', function() {
        controller.openSideNav('left');
        expect(openSideNavToggle).toHaveBeenCalled();
    });
}