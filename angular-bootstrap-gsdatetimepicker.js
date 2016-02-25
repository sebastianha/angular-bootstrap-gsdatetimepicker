"use strict";

angular.module("ui.gsdatetimepicker", []).directive("gsdatetimepicker", [function() {
		return {
			require : "?ngModel",
			restrict: "A",
			scope   : {
				options: "@"
			},
			link    : function($scope, $element, $attrs, ngModelCtrl) {
				var options = $scope.$eval($attrs.options);
				options.timeZone = moment.tz.guess();

				$element.on("dp.change", function() {
					if(ngModelCtrl) {
						ngModelCtrl.$setViewValue($element.data("DateTimePicker").date());
					}
				}).datetimepicker(options);

				$element.on("dp.error",  function() {
					if(ngModelCtrl) {
						var date = moment(ngModelCtrl.$viewValue, options.format);
						if(date.isValid() === true) {
							$element.data("DateTimePicker").date(date);
						} else {
							ngModelCtrl.$setViewValue($element.data("DateTimePicker").date());
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
							if(date.length === 5 && date.split(":").length === 2) {
								$element.data("DateTimePicker").date(moment(date, "HH:mm"));
							} else {
								$element.data("DateTimePicker").date(moment(date));
							}

						}
					};
				}
			}
		};
	}
]);