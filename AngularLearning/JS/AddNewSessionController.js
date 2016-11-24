
app.controller("newSessionController", function ($scope) {

    $scope.saveform = function (session) {
        alert("Session " + session.Name +" saved");
    };
});