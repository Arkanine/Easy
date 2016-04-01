'use strict';

angular
    .module('app.landing')
    .directive('signUp', signUp);

signUp.$inject = ['$mdDialog'];
function signUp($mdDialog) {
    return {
        restrict: 'A',
        replace: true,
        scope: false,
        link: function (scope, element) {
            element.bind('click', function (event) {
                $mdDialog.show({
                    controller: SignUpController,
                    templateUrl: 'components/landing/templates/signup_dialog.html',
                    parent: document.querySelectorAll('.backdrop-container'),
                    targetEvent: event,
                    clickOutsideToClose: true
                });
            });

            function SignUpController ($scope, authService) {
                $scope.user         = {};
                $scope.signup       = signup;
                $scope.close        = close;

                function signup (isValid) {
                    if(!isValid) {
                        return;
                    }
                    authService.signup($scope.user);
                    close();
                }

                function close () {
                    $mdDialog.hide();
                }
            }
        }
    };
}
