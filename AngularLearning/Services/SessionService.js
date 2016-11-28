﻿app.factory('sessionData', function () {
    return {
        sessions:[{
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
            ]
    };
});
