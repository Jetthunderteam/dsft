/*************************
 Training Controller Spec
 **************************/
describe('Training Controller Tests', spec);

function spec() {
    var scope, controller;

    beforeEach(function() {
        module('dsft');
        inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('TrainingCtrl', {$scope: scope});
        })
    });

    describe('Training Controller Specs', function () {
        it('Should have a defined controller', function () {
            expect(controller).toBeDefined();
        });
    });
}