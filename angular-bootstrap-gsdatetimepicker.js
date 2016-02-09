"use strict";

angular.module("ui.gsdatetimepicker", []).directive("gsdatetimepicker", [
	"$timeout",
	function($timeout) {
		return {
			require : "?ngModel",
			restrict: "A",
			scope   : {
				options: "@"
			},
			link    : function($scope, $element, $attrs, ngModelCtrl) {
				var options = $scope.$eval($attrs.options);

				$element.on("dp.change", function() {
					if(ngModelCtrl) {
						ngModelCtrl.$setViewValue($element.data("DateTimePicker").date());
					}
				}).datetimepicker(options);

				$element.on("dp.error",  function() {
					if(ngModelCtrl) {
						var date = Date.parse(ngModelCtrl.$viewValue);
						if(isNaN(date)) {
							ngModelCtrl.$setViewValue($element.data("DateTimePicker").date());
						} else {
							$element.data("DateTimePicker").date(new Date(date));
						}

					}
				}).datetimepicker(options);

				if(ngModelCtrl) {
					ngModelCtrl.$render = function() {
						var date = null;

						if(ngModelCtrl && ngModelCtrl.$viewValue) {
							date = ngModelCtrl.$viewValue;
						}

						if(date === null) {
							$element.data("DateTimePicker").date(null);
						} else {
							$element.data("DateTimePicker").date(new Date(date));
						}
					};
				}
			}
		};
	}
]);