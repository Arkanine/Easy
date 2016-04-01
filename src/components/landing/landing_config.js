'use strict';

(function () {
    angular
        .module('app.landing', [])
        .config(landingConfig);

    landingConfig.$inject = ['$stateProvider'];
    function landingConfig($stateProvider) {
        $stateProvider
            .state('landing', {
                url: '/landing',
                templateUrl: 'components/landing/templates/landing_template.html',
                controller: 'LandingController as vm',
                resolve: {
                    skipIfLoggedIn: function (authService) {
                        return authService.skipIfLoggedIn();
                    }
                }
            });
    }
})();

