'use strict';

angular.module("docs").controller("PatInfoCtrl", function($scope, PatientFactory){
    
    PatientFactory.getPatientInfo().then(function(data){
        console.log("data", data);
        $scope.patientData = data.data;
    }).catch(function(error){
        console.log("nope", error);
    });

});