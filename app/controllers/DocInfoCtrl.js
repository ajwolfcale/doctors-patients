'use strict';

angular.module("docs").controller("DocInfoCtrl", function($scope, DoctorFactory){
    
    DoctorFactory.getDocInfo().then(function(data){
        console.log("data", data);
        $scope.DocData = data.data;
    }).catch(function(error){
        console.log("nope", error);
    });

});