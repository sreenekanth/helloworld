'use strict';
angular.module("hexode").config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise('' / welcome);
        $stateProvider
            .state('welcome', {
                url: '/welcome',
                templateUrl: 'app/modules/welcome/welcome.html',
                controller: 'AuthControler'
            })
    }
])
