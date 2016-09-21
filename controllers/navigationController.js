var myApp = angular.module('dashboard', ['ngSanitize', 'ngCookies']);

myApp.controller('NavigationController', function ($scope, $http, $cookies) {
    $scope.links = [
        {name: 'Dashboard', url: 'dashboard.html'},
        {name: 'Mahlzeiten', url: 'food.html', action: 'save'},
        {name: 'Feedback', url: 'feedback.html', action: 'save'},
        {name: 'Restaurantseite', url: 'page.html', action: 'save'},
        {name: 'Hilfe', url: 'help.html'}
    ];
    var url = $cookies.get('view');
    $http.get('content/' + url)
        .then(function (response) {
            $scope.content = response.data;
        });
    $scope.action;


    $scope.openSettings = function () {
        $scope.popup = true;
    }
    $scope.popupClose = function () {
        $scope.popup = false;
    }
    $scope.load = function (url, action) {
        if(action) {
            $scope.action = true;
        }
        else {
            $scope.action = false;
        }
        $http.get('content/' + url)
            .then(function (response) {
                $scope.content = response.data;
                $cookies.put('view', url);
            });
    }
});