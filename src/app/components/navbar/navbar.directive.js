/*************************
 Navbar Directive
 **************************/
(function () {
    'use strict';
    angular
        .module('dsft.navigation')
        .directive('navbarDirective', navbarDirective);

    navbarDirective.$inject = ['$window'];
    function navbarDirective() {
        var directive = {
            restrict: 'EA',
            link: link,
            templateUrl: 'src/app/components/navbar/navbar.html',
            controller: 'NavbarCtrl',
            controllerAs: 'NavbarCtrl',
            bindToController: true
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
})();