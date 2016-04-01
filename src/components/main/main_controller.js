'use strict';

angular
    .module('app.main')
    .controller('MainController', MainController);

MainController.$inject = ['authService'];

function MainController(authService) {
    var vm = this;

    vm.logout = logout;

    function logout () {
        authService.logout();
    }
}
