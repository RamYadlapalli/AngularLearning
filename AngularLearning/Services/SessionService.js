app.factory('sessionData', function ($http,$log) {
    return {
        getSessionData: function (successcb) {

            $http({ method: 'GET', url: '/api/session' }).success(function (data, status, headers, config) {
                return successcb(data);
            }).
                error(function (data, status, headers, config) {
                    $log.warn(data, status, headers, config);
                });
        }
    };
});
app.factory('customerData', function ($http) {
    return {
        getCustomers: function () {
            $http({ method: 'GET', url: 'http://www.thomas-bayer.com/sqlrest/CUSTOMER/' }).
                success(function (data, status, headers, config) {
                    console.log(data);
                }).
                error(function (data, status, headers, config) {
                     console.log(data);
                });
        }
    };
});
