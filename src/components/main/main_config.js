'use strict';

(function () {
    angular
        .module('app.main', [])
        .config(mainConfig);

    mainConfig.$inject = ['$stateProvider'];
    function mainConfig($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                abstract: true,
                templateUrl: 'components/main/main_template.html',
                controller: 'MainController as vm',
                resolve: {
                    loginRequired: function (authService) {
                        return authService.loginRequired();
                    }
                }
            });
    }
})();