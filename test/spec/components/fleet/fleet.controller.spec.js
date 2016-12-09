/*************************
 Fleet Controller Spec
 **************************/
describe('Fleet Controller Tests', spec);

function spec() {
    var scope, controller;

    beforeEach(function() {
        module('dsft');
        inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('FleetCtrl', {$scope: scope});
        })
    });

    describe('Fleet Controller Specs', function () {
        it('Should have a defined controller', function () {
            expect(controller).toBeDefined();
        });
    });
}