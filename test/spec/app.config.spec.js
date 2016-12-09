/*************************
 Configuration Spec
 **************************/
describe('Application Config Tests', spec);

function spec() {
    var rootScope, state, injector, mockState;

    beforeEach(function() {
        module('dsft');
        inject(function($rootScope, $state, $injector) {
            rootScope = $rootScope;
            state = $state;
            injector = $injector;
        })
    });

    it('Should transition to home on calling state "home"', function() {
        mockState = 'home';
        expect(state.href(mockState)).toEqual('/')
    });
    it('Should transition to training on calling state "training"', function() {
        mockState = 'training';
        expect(state.href(mockState)).toEqual('/training')
    });
    it('Should experience to home on calling state "experience"', function() {
        mockState = 'experience';
        expect(state.href(mockState)).toEqual('/experience')
    });
    it('Should fleet to home on calling state "fleet"', function() {
        mockState = 'fleet';
        expect(state.href(mockState)).toEqual('/fleet')
    });
}