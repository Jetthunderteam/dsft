/*************************
 Experience Controller Spec
 **************************/
describe('Experience Controller Tests', spec);

function spec() {
    var scope, controller;

    beforeEach(function() {
        module('dsft');
        inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('ExperienceCtrl', {$scope: scope});
        })
    });

    describe('Experience Controller Specs', function () {
        it('Should have a defined controller', function () {
            expect(controller).toBeDefined();
        });
    });
}