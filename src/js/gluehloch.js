var gluehlochApp = angular.module('gluehloch', ['ngRoute']);

/*
 * *** FACTORY ***

   TODO Wie verdrahte ich die URLs?
   TODO  Momementan wird nur success() behandelt. Wie sieht es mit error() aus?

 */

/*
 * *** CONTROLLER ***
 */

gluehlochApp.controller('IntroCtrl', ['$scope', function($scope) {
}]);

gluehlochApp.controller('PomCtrl', ['$scope', function($scope) {
}]);

gluehlochApp.controller('AWToolsCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
}]);

gluehlochApp.controller('SwingCtrl', ['$scope', '$location', function($scope, $location) {
}]);

gluehlochApp.controller('BetofficeCtrl', ['$scope', '$location', function($scope, $location) {
}]);

gluehlochApp.controller('MiscCtrl', ['$scope', '$location', function($scope, $location) {
}]);

gluehlochApp.controller('HistoryCtrl', ['$scope', '$location', function($scope, $location) {
}]);

/**
 * The controller for the header menu bar. Controlling the highlighting.
 */
gluehlochApp.controller('HeaderCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function (viewLocation) {
        if ($location.path() === '/' && viewLocation === '/home') {
            return true;
        }
        return viewLocation === $location.path();
    };
}]);

/*
 * *** ROUTING ***
 */

gluehlochApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'IntroCtrl',
                templateUrl: 'intro.html'
            })
        .when('/home',
            {
                controller: 'IntroCtrl',
                templateUrl: 'intro.html'
            })
        .when('/pom',
            {
                controller: 'PomCtrl',
                templateUrl: 'pom.html'
            })
        .when('/awtools',
            {
                controller: 'AWToolsCtrl',
                templateUrl: 'awtools.html'
            })
        .when('/swing',
            {
                controller: 'SwingCtrl',
                templateUrl: 'swing.html'
            })
        .when('/betoffice',
            {
                controller: 'BetofficeCtrl',
                templateUrl: 'betoffice.html'
            })
        /*
        .when('/betoffice',
            {
                controller: 'BetofficeCtrl',
                templateUrl: 'betoffice.html'
            })
        .when('/betoffice-web',
            {
                controller: 'BetofficeWebCtrl',
                templateUrl: 'betofficeweb.html'
            })
        */
        .when('/misc',
            {
                controller: 'MiscCtrl',
                templateUrl: 'misc.html'
            })
        .when('/history',
            {
                controller: 'HistoryCtrl',
                templateUrl: 'history.html'
            })
        .otherwise({ redirectTo: 'home' });

}]);
