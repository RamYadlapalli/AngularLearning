'use strict';
var app = angular.module("MyApp", ['ngSanitize']);

app.controller("HomeController", function ($scope, sessionData) {
    $scope.Name = "Sessions List";
    $scope.Date = "11/22/2016";
    sessionData.getSessionData(function (sessions) {
        $scope.Sessions = sessions;
    });

    $scope.snippet = '<span style="color:red">Hi there</span>',
        $scope.boolVal = false,
        $scope.buttonDisabled = true,
        $scope.sortOrder = "Name",
        $scope.resultsLimit = 4,
       

    $scope.upVote = function (session) {
        session.VoteCount++;
    };
    $scope.changeCB = function (session) {
        //  if(this.isChecked==true)
        //session.VoteCount++;
    };
  
}

   
);
app.filter("addHours", function () {
    return function (Duration) {
        return Duration + " Hours";
    };
});