'use strict';

angular.module("docs").factory("PatientFactory", function($http, $q, FBUrl){
    let getPatientInfo = () => {
            return $q(function(resolve, reject){
                $http.get(`${FBUrl}/patients.json`)
                .then(function(data){
                    resolve(data);
                })
                .catch(function(error){
                    reject(error);
                });
            });
    };
    return { getPatientInfo };
});