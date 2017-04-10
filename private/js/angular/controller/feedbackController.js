myApp.controller('feedbackController', function ($scope, $location, $http) {
    $scope.config = {
        title: 'Feedback',
        switches: [
            {
                name: 'Neu',
                url: 'new'
            },
            {
                name: 'Akzeptiert',
                url: 'accepted'
            },
            {
                name: 'Abgelehnt',
                url: 'declined'
            }
        ],
        content: 'content/feedback.html'
    }

    switch ($location.hash()) {
        case 'new':
            $scope.config.switched = 1;
            $http.get(URL + '/feedback?get=id,rating,subject,text&status=1&restaurant=' + restaurant)
                .then(function (response) {
                    $scope.newFeedbacks = response.data;
                })
            break;
        case 'accepted':
            $scope.config.switched = 2;
            $http.get(URL + '/feedback?get=id,rating,subject,text&status=2&restaurant=' + restaurant)
                .then(function (response) {
                    $scope.acceptedFeedbacks = response.data;
                })
            break;
        case 'declined':
            $scope.config.switched = 3;
            $http.get(URL + '/feedback?get=id,rating,subject,text&status=3&restaurant=' + restaurant)
                .then(function (response) {
                    $scope.declinedFeedbacks = response.data;
                })
            break;
        default:
            $scope.config.switched = 1;
    }

    $scope.input = {};

    $http.get(URL + '/restaurants?get=autoAcceptFeedback&id=' + restaurant)
        .then(function (response) {
            var data = response.data[0];
            $scope.input.autoAccept = data.autoAcceptFeedback;
        });

    $scope.accept = function (id, index) {
        $http.put(URL + '/feedback?status=2&id=' + id)
            .then(function () {
                $scope.acceptedFeedbacks.push($scope.newFeedbacks[index]);
                $scope.newFeedbacks.splice(index, 1);
            });
    }
    $scope.decline = function (id, index) {
        $http.put(URL + '/feedback?status=3&id=' + id)
            .then(function () {
                $scope.declinedFeedbacks.push($scope.newFeedbacks[index]);
                $scope.newFeedbacks.splice(index, 1);
            });
    }
    $scope.reDecline = function (id, index) {
        $http.put(URL + '/feedback?status=3&id=' + id)
            .then(function () {
                $scope.declinedFeedbacks.push($scope.acceptedFeedbacks[index]);
                $scope.acceptedFeedbacks.splice(index, 1);
            });
    }
    $scope.reAccept = function (id, index) {
        $http.put(URL + '/feedback?status=2&id=' + id)
            .then(function () {
                $scope.acceptedFeedbacks.push($scope.declinedFeedbacks[index]);
                $scope.declinedFeedbacks.splice(index, 1);
            });
    }

    $scope.changeAutoAccept = function (value) {
        var data = {
            id: restaurant,
            autoAcceptFeedback: value
        }
        $http({
            url: URL + '/restaurants',
            method: 'PUT',
            params: data
        }).then(function (result) {
            },
            function () {
                globalNotification('error')
            });
    }
});