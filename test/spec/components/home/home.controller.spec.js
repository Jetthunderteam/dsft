/*************************
 Home Controller Spec
 **************************/
describe('Home Controller Tests', spec);

function spec() {
    var scope, controller,
        _mockHomeSlides;

    _mockHomeSlides = [{imageUrl: 'src/assets/images/home/home-slide1.jpg', title: '', thumb: '', url: ''}, {imageUrl: 'src/assets/images/home/home-slide2.jpg', title: '', thumb: '', url: ''}, {imageUrl: 'src/assets/images/home/home-slide3.jpg', title: '', thumb: '', url: ''}, {imageUrl: 'src/assets/images/home/home-slide4.jpg', title: '', thumb: '', url: ''}, {imageUrl: 'src/assets/images/home/home-slide5.jpg', title: '', thumb: '', url: ''}, {imageUrl: 'src/assets/images/home/home-slide6.jpg', title: '', thumb: '', url: ''}, {imageUrl: 'src/assets/images/home/home-slide7.jpg', title: '', thumb: '', url: ''}, {imageUrl: 'src/assets/images/home/home-slide8.jpg', title: '', thumb: '', url: ''}, {imageUrl: 'src/assets/images/home/home-slide9.jpg', title: '', thumb: '', url: ''}, {imageUrl: 'src/assets/images/home/home-slide10.jpg', title: '', thumb: '', url: ''}];

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

        /**
         * Binding Tests
         */
        it('Should have a defined set of home slides', function () {
           expect(controller.slides).toEqual(_mockHomeSlides);
        });
    });
}
