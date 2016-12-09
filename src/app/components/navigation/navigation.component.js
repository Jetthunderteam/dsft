/*************************
 Navigation Component
 **************************/
(function () {
    'use strict';

    angular
        .module('dsft.navigation')
        .component('navigationComponent', navigationComponent());

    navigationComponent.$inject = [];
    function navigationComponent() {
        var component = {
            bindings: {},
            templateUrl: 'src/app/components/navigation/navigation.html',
            controller: 'NavigationCtrl',
            controllerAs: 'NavigationCtrl'
        };
        return component;
    }
})();