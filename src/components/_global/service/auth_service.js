'use strict';

(function () {
    angular
        .module('app.config')
        .factory('authService', authService);

    authService.$inject = ['$auth', '$state', '$q'];
    function authService($auth, $state, $q) {
        return {
            signup:         signup,
            signin:         signin,
            authenticate:   authenticate,
            logout:         logout,
            skipIfLoggedIn: skipIfLoggedIn,
            loginRequired:  loginRequired
        };


        function signup (user) {
            $auth.signup(user)
                .then(function(response) {
                    $auth.setToken(response);
                    $state.go('main.profile');
                }, function (err) {
                    console.log(err);
                });
        }

        function signin (user) {
            $auth.login(user)
                .then(function () {
                    $state.go('main.profile');
                }, function (err) {
                    console.dir(err);
                });
        }

        function authenticate (provider) {
            $auth.authenticate(provider)
                .then(function () {
                    $state.go('main.profile');
                }, function (error) {
                    if (error.error) {
                        console.log(error.error);
                    } else if (error.data) {
                        console.log(error, error.status);
                    } else {
                        console.log(error);
                    }
                });
        }

        function logout () {
            if (!$auth.isAuthenticated()) {
                return;
            }
            $auth.logout()
                .then(function() {
                    $state.go('landing');
                });
        }

        function skipIfLoggedIn() {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.reject();
            } else {
                deferred.resolve();
            }
            return deferred.promise;
        }

        function loginRequired() {
            var deferred = $q.defer();
            if ($auth.isAuthenticated()) {
                deferred.resolve();
            } else {
                $state.go('landing');
            }
            return deferred.promise;
        }
    }
})();
