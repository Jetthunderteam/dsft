/*************************
 Footer Directive
 **************************/
(function () {
    'use strict';
    angular
        .module('dsft.footer')
        .directive('footerDirective', footerDirective);

    footerDirective.$inject = [];
    function footerDirective() {
        var directive = {
            restrict: 'EA',
            link: link,
            templateUrl: 'src/app/components/footer/footer.html',
            controller: 'FooterCtrl',
            controllerAs: 'FooterCtrl',
            bindToController: true
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }
})();