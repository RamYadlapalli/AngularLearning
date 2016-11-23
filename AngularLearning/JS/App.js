'use strict';
var app = angular.module("MyApp", ['ngSanitize']);

app.controller("HomeController", function ($scope) {
    $scope.Name = "Sessions List";
    $scope.Date = "11/22/2016";
    $scope.snippet = '<span style="color:red">Hi there</span>',
        $scope.boolVal = false,
        $scope.buttonDisabled = true,
        $scope.sortOrder = "Name",
        $scope.resultsLimit =4,
    $scope.Sessions = [{
        Name: "Bbc",
        Type: "IP",
        VoteCount: 0,
        Level: "Expert",
        Duration: 4
    },
        {
            Name: "Session1",
            Type: "IP",
            VoteCount: 0,
            Level: "Beginner",
            Duration: 2
        },
        {
            Name: "ASession5",
            Type: "IP",
            VoteCount: 0,
            Level: "Intermediate",
            Duration: 1
        },
        {
            Name: "Session3",
            Type: "IP",
            VoteCount: 0,
            Level: "Beginner",
            Duration: 5
        },
        {
            Name: "Session2",
            Type: "IP",
            VoteCount: 0,
            Level: "Expert",
            Duration: 1
        }
    ];

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