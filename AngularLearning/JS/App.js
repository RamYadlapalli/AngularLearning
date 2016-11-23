'use strict';
var app = angular.module("MyApp", ['ngSanitize']);

app.controller("HomeController", function ($scope) {
    $scope.Name = "TestApp";
    $scope.Date = "11/22/2016";
    $scope.snippet = '<span style="color:red">Hi there</span>',
        $scope.boolVal = false,
    $scope.Sessions = [{
        Name: "Session1",
        Type: "IP",
        VoteCount: 0
    },
        {
            Name: "Session1",
            Type: "IP",
            VoteCount:0
        },
        {
            Name: "Session5",
            Type: "IP",
            VoteCount: 0
        },
        {
            Name: "Session3",
            Type: "IP",
            VoteCount: 0
        },
        {
            Name: "Session2",
            Type: "IP",
            VoteCount: 0
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