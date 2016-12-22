/*************************
 Home Controller
 **************************/
(function () {
    'use strict';

    angular
        .module('dsft.home')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = [];
    function HomeCtrl() {
        var vm = this;

        /** Variables */
        var homeSlides = [
            {imageUrl: 'src/assets/images/home/home-slide1.jpg', title: '', thumb: '', url: ''},
            {imageUrl: 'src/assets/images/home/home-slide2.jpg', title: '', thumb: '', url: ''},
            {imageUrl: 'src/assets/images/home/home-slide3.jpg', title: '', thumb: '', url: ''},
            {imageUrl: 'src/assets/images/home/home-slide4.jpg', title: '', thumb: '', url: ''},
            {imageUrl: 'src/assets/images/home/home-slide5.jpg', title: '', thumb: '', url: ''},
            {imageUrl: 'src/assets/images/home/home-slide6.jpg', title: '', thumb: '', url: ''},
            {imageUrl: 'src/assets/images/home/home-slide7.jpg', title: '', thumb: '', url: ''},
            {imageUrl: 'src/assets/images/home/home-slide8.jpg', title: '', thumb: '', url: ''},
            {imageUrl: 'src/assets/images/home/home-slide9.jpg', title: '', thumb: '', url: ''},
            {imageUrl: 'src/assets/images/home/home-slide10.jpg', title: '', thumb: '', url: ''}
        ];

        /** Activate */

        /** View Bindings */
        vm.slides = homeSlides;

        /** Bindings */
    }
})();
