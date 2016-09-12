'use strict';

/**
 * @ngdoc function
 * @name angularmaterialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularmaterialApp
 */
angular.module('angularmaterialApp')
.controller('MainCtrl', function ($scope) {

	$scope.lista = [
		{ id:1, nombre:'Jennifer Miranda', detail:'Me encantan los retos, al entrar a la universidad me di cuenta que la programación era para mí, tengo mas de 5 años en el área de desarrollo Web y pretendo seguir en el mismo ámbito. Me gusta aprender de las herramientas que utilizo para culminar mis proyectos. Por ese motivo aprendí a maquetar, usar algunas de las magnificas opciones que aporta PhotoShop, en algunas ocasiones me he sentado a estudiar códigos ajenos para entender su función.', avatar:'images/icons/ic_person_24px.svg' },
		{ id:2, nombre:'Jormary Miranda', detail:'Me encantan los retos, al entrar a la universidad me di cuenta que la programación era para mí, tengo mas de 5 años en el área de desarrollo Web y pretendo seguir en el mismo ámbito. Me gusta aprender de las herramientas que utilizo para culminar mis proyectos. Por ese motivo aprendí a maquetar, usar algunas de las magnificas opciones que aporta PhotoShop, en algunas ocasiones me he sentado a estudiar códigos ajenos para entender su función.', avatar:'images/icons/ic_person_24px.svg' },
		{ id:3, nombre:'Johanna Miranda', detail:'Me encantan los retos, al entrar a la universidad me di cuenta que la programación era para mí, tengo mas de 5 años en el área de desarrollo Web y pretendo seguir en el mismo ámbito. Me gusta aprender de las herramientas que utilizo para culminar mis proyectos. Por ese motivo aprendí a maquetar, usar algunas de las magnificas opciones que aporta PhotoShop, en algunas ocasiones me he sentado a estudiar códigos ajenos para entender su función.', avatar:'images/icons/ic_person_24px.svg' }
	];

	$scope.selectUser = function (user) {
		$scope.detalle = user;
	}
	$scope.selectedIndex = -1;
	$scope.toggleSelect = function(ind){
        if( ind === $scope.selectedIndex ){
            $scope.selectedIndex = -1;
        } else{
            $scope.selectedIndex = ind;
        }
    }

	$scope.getClass = function(ind){
        if( ind === $scope.selectedIndex ){
            return "selected";
        } else{
            return "";
        }
    }
});
