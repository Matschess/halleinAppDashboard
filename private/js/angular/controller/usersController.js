myApp.controller('usersController', function ($scope, $http) {
    $scope.config = {
        title: 'Benutzer',
        actions: [
            {title: 'Hinzufügen', icon: 'add', route: '/user-add'}
        ],
        content: 'content/users.html'
    }

    $http.get(URL + '/users?get=id,username,type,lastActive')
        .then(function (response) {
            $scope.users = response.data;
        });

    $scope.sort = function (property) {
        $scope.users.sort(dynamicSort(property));
    }

    function dynamicSort(property) {
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result;
        }
    }

    $scope.deleteUser = function (id, index) {
        var params = "?id=" + id;
        $http.delete(URL + '/users' + params)
            .then(function () {
                $scope.users.splice(index, 1);
                globalNotification('success', 'Der Benutzer wurde gelöscht.')
            },
            function () {
                globalNotification('error')
            });
    }
});