/*************************
 Urls Factory Spec
 **************************/
describe('Urls Factory Tests', spec);

function spec() {
    var urlsFactory;

    beforeEach(function() {
        module('dsft');
        inject(function(_urlsFactory_) {
            urlsFactory = _urlsFactory_;
        })
    });

    describe('Urls Factory Specs', function () {
        it('Should have a defined factory', function () {
            expect(urlsFactory).toBeDefined();
        });
    });
}