'use strict';

/**
 * @ngdoc directive
 * @name angularmaterialApp.directive:personDetail
 * @description
 * # personDetail
 */
angular.module('angularmaterialApp')
.directive('personDetail', function () {
	return {
		restrict: 'E',
	  	template: '<md-icon md-svg-src="{{detalle.avatar}}"></md-icon>'+
	  				'<h2 ng-bind="detalle.nombre"></h2>'+
	  				'<p ng-bind="detalle.detail"></p>'
	};
});
