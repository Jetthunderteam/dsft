/*************************
 Utils Factory Spec
 **************************/
describe('Utils Factory Tests', spec);

function spec() {
    var utilsFactory, baseDate = new Date(2016, 0, 9, 09, 09, 09);

    beforeEach(function() {
        module('dsft');
        inject(function(_utilsFactory_) {
            utilsFactory = _utilsFactory_;
        })
    });

    describe('Utils Factory Specs', function () {
        it('Should have a defined factory', function () {
            expect(utilsFactory).toBeDefined();
        });

        /**
         * Moment Tests
         */
        it('Should get the current moment on calling "getMoment"', function () {
            jasmine.clock().mockDate(baseDate);
            expect(utilsFactory.getMoment()).toBeDefined();
        });
        it('Should get the current moment in HH:mm format on calling "getTime"', function () {
            jasmine.clock().mockDate(baseDate);
            expect(utilsFactory.getTime()).toEqual('09:09');
        });
        it('Should get the current moment in YYYY format on calling "getYear"', function () {
            jasmine.clock().mockDate(baseDate);
            expect(utilsFactory.getYear()).toEqual('2016');
        });
    });
}