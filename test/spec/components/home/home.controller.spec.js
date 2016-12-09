/*************************
 Home Controller Spec
 **************************/
describe('Home Controller Tests', spec);

function spec() {
    var scope, controller;

    beforeEach(function() {
        module('dsft');
        inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('HomeCtrl', {$scope: scope});
        })
    });

    describe('Home Controller Specs', function () {
        it('Should have a defined controller', function () {
            expect(controller).toBeDefined();
        });
    });
}