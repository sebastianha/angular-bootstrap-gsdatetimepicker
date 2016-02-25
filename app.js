"use strict";

angular.module("angular-bootstrap-gsdatetimepicker-test", ["ui.gsdatetimepicker"]).controller("index", function($scope, $timeout) {
	$scope.model = "2016-02-23T23:19:00";
	$timeout(function() {
		$scope.model = "2017-02-23T23:19:00";
	}, 1000);
});