/*************************
 Footer Directive Spec
 **************************/
describe('Footer Directive Tests', spec);

function spec() {
    var scope, compile, directiveElem;

    beforeEach(function() {
        module('dsft');
        module('dsft-templates');
        inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();
            compile = $compile;
        });

        /**
         * Creates the directive element before
         * each test spec is run
         */
        directiveElem = getCompiledElement();
    });

    /**
     * A function that gets the compiled directive element
     * for testing within the spec
     * @returns {object} compiledElement - The compiled directive
     */
    function getCompiledElement() {
        var element = angular.element('<footer-directive></footer-directive>'),
            compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }

    describe('Footer Directive Specs', function () {
        //it('Should have a defined HTML directive element', function () {
        //    expect(directiveElem).toBeDefined();
        //});
    });
}