
app.controller("newSessionController", function ($scope) {

    $scope.saveform = function (session, sessionForm) {
        console.log(sessionForm);
        if (sessionForm.$valid)
            alert("Session " + session.Name + " saved");
    };
});