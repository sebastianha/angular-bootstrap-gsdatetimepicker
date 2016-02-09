"use strict";

angular.module("angular-bootstrap-gsdatetimepicker-test", ["ui.gsdatetimepicker"]).controller("index", function($scope, $timeout) {
	$scope.model = new Date(Date.parse("2018-01-01 00:00"));
	$timeout(function() {
		$scope.model = new Date(Date.parse("2019-01-01 00:00"));
	}, 1000);
});