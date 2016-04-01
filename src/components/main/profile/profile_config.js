'use strict';

(function () {
    angular
        .module('app.main')
        .config(profileConfig);

    profileConfig.inject = [
        '$stateProvider'
    ];
    function profileConfig($stateProvider) {
        $stateProvider
            .state('main.profile', {
                url: 'profile',
                views: {
                    'main': {
                        templateUrl: 'components/main/profile/profile_template.html',
                        controller: 'ProfileController as vm'
                    }
                },
                resolve: {
                    //profile: ['profileService', function (profileService) {
                    //    return profileService.data();
                    //}]
                }
            });
    }
})();
