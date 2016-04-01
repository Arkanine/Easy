'use strict';

angular
    .module('app.landing')
    .directive('signIn', signIn);

signIn.$inject = ['$mdDialog'];
function signIn($mdDialog) {
    return {
        restrict: 'A',
        replace: true,
        scope: false,
        link: function (scope, element) {
            element.bind('click', function (event) {
                $mdDialog.show({
                    controller: SignInController,
                    templateUrl: 'components/landing/templates/signin_dialog.html',
                    parent: document.querySelectorAll('.backdrop-container'),
                    targetEvent: event,
                    clickOutsideToClose: true
                });
            });

            function SignInController ($scope, authService) {
                $scope.user         = {};
                $scope.signin       = signin;
                $scope.authenticate = authenticate;
                $scope.close        = close;

                function signin (isValid) {
                    if(!isValid) {
                        return;
                    }
                    authService.signin($scope.user);
                    close();
                }

                function authenticate (provider) {
                    authService.authenticate(provider);
                    close();
                }

                function close () {
                    $mdDialog.hide();
                }
            }
        }
    };
}
