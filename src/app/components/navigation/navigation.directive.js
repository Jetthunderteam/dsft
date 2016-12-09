/*************************
 Navigation Directive
 **************************/
(function () {
    'use strict';
    angular
        .module('dsft.navigation')
        .directive('navigationDirective', navigationDirective);

    navigationDirective.$inject = [];
    function navigationDirective() {
        var directive = {
            restrict: 'EA',
            link: link,
            templateUrl: 'src/app/components/navigation/navigation.html',
            controller: 'NavigationCtrl',
            controllerAs: 'NavigationCtrl',
            bindToController: true
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }
})();