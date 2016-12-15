/*************************
 Weather Factory
 **************************/
(function () {
    'use strict';

    angular
        .module('dsft.weather')
        .factory('weatherFactory', weatherFactory);

    weatherFactory.$inject = ['$http', 'rx'];
    function weatherFactory($http, rx) {
        var factory = {
            getUpstreamData: getUpstreamData
        };

        function getUpstreamData(upstreamUrl) {
            var url = upstreamUrl;
            return rx.Observable.fromPromise($http({
                url: url,
                method: "GET"
            }))
        }

        return factory;
    }
})();
