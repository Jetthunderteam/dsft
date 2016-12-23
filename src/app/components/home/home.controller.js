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
        var vm = this, flickity, isotope;

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
        vm.$onInit = activate;

        /** View Bindings */
        vm.slides = homeSlides;

        /** Bindings */
        vm.initialiseFlickity = initialiseFlickity;
        vm.initialiseIsotope = initialiseIsotope;
        vm.sliderNext = sliderNext;
        vm.sliderPrev = sliderPrev;

        /**
         * Activates the home controller and makes calls
         * to the following methods:
         *      - initialiseFlickity: Initialises the jQuery Flickity slider
         *      - initialiseIsotope: Initialises the jQuery Isotope grid
         */
        function activate() {
            initialiseFlickity();
            initialiseIsotope();
        }

        /**
         * Initialises the jQuery Flickity slider
         */
        function initialiseFlickity() {
            var _element;
            _element = document.querySelector('.dsft-homeSlider');
            flickity = new Flickity(_element, {
                autoPlay: 12000,
                cellAlign: 'left',
                contain: true,
                prevNextButtons: false
            });
        }

        /**
         * Initialises the jQuery Isotope gallery
         */
        function initialiseIsotope() {
            var _element;
            _element = document.querySelector('.dsft-homeGallery');
            isotope = new Isotope(_element, {
                itemSelector: '.dsft-homeGalleryItem',
                layoutMode: 'fitRows'
            });
        }

        /**
         *
         */
        function sliderNext() {
            flickity.next(true);
        }

        /**
         *
         */
        function sliderPrev() {
            flickity.previous(true);
        }
    }
})();
