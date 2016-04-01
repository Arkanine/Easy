'use strict';

(function () {
    angular
        .module('app.config', [
            'ui.router',
            'restangular',
            'LocalStorageModule',
            'ngMaterial',
            'ngSanitize',
            'satellizer',
            'smart-table'
        ])
        .constant('api', {
            serverUrl: 'http://easy-app.herokuapp.com' // 'http://localhost:3000'
        })
        .config(appConfig);

    appConfig.$inject = ['api', 'localStorageServiceProvider', 'RestangularProvider', '$mdIconProvider', '$urlRouterProvider', '$authProvider'];
    function appConfig(api, localStorageServiceProvider, RestangularProvider, $mdIconProvider, $urlRouterProvider, $authProvider) {
        RestangularProvider.setBaseUrl(api.serverUrl);
        RestangularProvider.setRestangularFields({
            id: '_id'
        });

        $urlRouterProvider.otherwise('/landing');

        localStorageServiceProvider.setPrefix('easy');

        $authProvider.baseUrl = api.serverUrl;
        $authProvider.facebook({
            clientId: '1655932444623560'
        });
        var twitterUrl = api.serverUrl+ '/auth/twitter';
        $authProvider.twitter({
            url: twitterUrl
        });
        $authProvider.google({
            clientId: '699043805750-8nkuip35qqhj8sq0ocjtbidm8smd71de.apps.googleusercontent.com'
        });

        var icons = 'assets/icons/';
        $mdIconProvider
            .icon('ic_edit', icons + 'ic_edit.svg', 24);
    }
})();
